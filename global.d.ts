// global.d.ts
import 'react-native';
import { NativeWindStyleSheet } from 'nativewind';

declare module 'react-native' {
  interface ViewProps {
    className?: string;
  }

  interface TextProps {
    className?: string;
  }

  interface TextInputProps {
    className?: string;
  }

  interface ScrollViewProps {
    className?: string;
  }

  interface TouchableOpacityProps {
    className?: string;
  }
}
