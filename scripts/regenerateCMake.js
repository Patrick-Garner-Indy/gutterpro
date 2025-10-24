/**
 * Auto-regenerate Android autolinking files safely.
 * Fixes missing codegen modules (AsyncStorage, Reanimated).
 */

const fs = require("fs");
const path = require("path");

const jniPath = path.join(__dirname, "../android/app/src/main/jni");
fs.mkdirSync(jniPath, { recursive: true });

const checkExists = relPath => fs.existsSync(path.join(jniPath, relPath));

const libs = [
  {
    name: "rnasyncstorage",
    include: "<rnasyncstorage.h>",
    path: "../../node_modules/@react-native-async-storage/async-storage/android/build/generated/source/codegen/jni/",
    target: "react_codegen_rnasyncstorage"
  },
  {
    name: "rnreanimated",
    include: "<rnreanimated.h>",
    path: "../../node_modules/react-native-reanimated/android/build/generated/source/codegen/jni/",
    target: "react_codegen_rnreanimated"
  },
  {
    name: "safeareacontext",
    include: "<safeareacontext.h>",
    path: "../../node_modules/react-native-safe-area-context/android/src/main/jni/",
    target: "react_codegen_safeareacontext"
  },
  {
    name: "rnscreens",
    include: "<rnscreens.h>",
    path: "../../node_modules/react-native-screens/android/src/main/jni/",
    target: "react_codegen_rnscreens"
  }
];

// -------- Generate Android-autolinking.cmake --------
let cmakeContent = `# Auto-generated safe CMake autolinking
cmake_minimum_required(VERSION 3.13)
set(CMAKE_VERBOSE_MAKEFILE on)
set(REACTNATIVE_MERGED_SO true)
`;

libs.forEach(lib => {
  cmakeContent += `
if(EXISTS "\${CMAKE_CURRENT_LIST_DIR}/${lib.path}")
  add_subdirectory("\${CMAKE_CURRENT_LIST_DIR}/${lib.path}" ${lib.name}_autolinked_build)
  list(APPEND AUTOLINKED_LIBRARIES ${lib.target})
endif()
`;
});

fs.writeFileSync(path.join(jniPath, "Android-autolinking.cmake"), cmakeContent);
console.log("✅ Android-autolinking.cmake regenerated.");

// -------- Generate autolinking.h --------
let headerContent = `#pragma once
#include <ReactCommon/CallInvoker.h>
#include <ReactCommon/JavaTurboModule.h>
#include <ReactCommon/TurboModule.h>
#include <jsi/jsi.h>
#include <react/renderer/componentregistry/ComponentDescriptorProviderRegistry.h>
`;

libs.forEach(lib => {
  if (checkExists(lib.path)) {
    headerContent += `#include ${lib.include}\n`;
  }
});

headerContent += `
namespace facebook {
namespace react {
std::shared_ptr<TurboModule> autolinking_ModuleProvider(const std::string moduleName, const JavaTurboModule::InitParams &params);
std::shared_ptr<TurboModule> autolinking_cxxModuleProvider(const std::string moduleName, const std::shared_ptr<CallInvoker>& jsInvoker);
void autolinking_registerProviders(std::shared_ptr<ComponentDescriptorProviderRegistry const> providerRegistry);
} // namespace react
} // namespace facebook
`;

fs.writeFileSync(path.join(jniPath, "autolinking.h"), headerContent);
console.log("✅ autolinking.h regenerated.");

// -------- Generate autolinking.cpp --------
let cppContent = `#include "autolinking.h"
namespace facebook {
namespace react {
std::shared_ptr<TurboModule> autolinking_ModuleProvider(const std::string moduleName, const JavaTurboModule::InitParams &params) {
`;

libs.forEach(lib => {
  if (checkExists(lib.path)) {
    cppContent += `
  auto module_${lib.name} = ${lib.name}_ModuleProvider(moduleName, params);
  if (module_${lib.name} != nullptr) return module_${lib.name};
`;
  }
});

cppContent += `
  return nullptr;
}

std::shared_ptr<TurboModule> autolinking_cxxModuleProvider(const std::string moduleName, const std::shared_ptr<CallInvoker>& jsInvoker) {
  return nullptr;
}

void autolinking_registerProviders(std::shared_ptr<ComponentDescriptorProviderRegistry const> providerRegistry) {
  // Register only existing component providers
}
} // namespace react
} // namespace facebook
`;

fs.writeFileSync(path.join(jniPath, "autolinking.cpp"), cppContent);
console.log("✅ autolinking.cpp regenerated.");
