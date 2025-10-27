// src/screens/SurveyScreen.tsx
import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Button } from 'react-native';
import { ButtonPrimary } from '../components/ButtonPrimary';

type SurveyQuestion = {
  id: string;
  question: string;
  answer: string;
};

export const SurveyScreen: React.FC = () => {
  const [questions, setQuestions] = useState<SurveyQuestion[]>([
    { id: '1', question: 'Describe the job site:', answer: '' },
    { id: '2', question: 'Are there any safety concerns?', answer: '' },
    { id: '3', question: 'Additional notes:', answer: '' },
  ]);

  const handleChange = (id: string, value: string) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, answer: value } : q))
    );
  };

  const handleSubmit = () => {
    console.log('Survey submitted:', questions);
    // TODO: send data to backend or store locally
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
      <View className="flex-1 bg-white">
        <Text className="text-xl font-bold mb-4 text-center">Job Survey</Text>
        {questions.map((q) => (
          <View key={q.id} className="mb-4">
            <Text className="mb-2 font-semibold">{q.question}</Text>
            <TextInput
              value={q.answer}
              onChangeText={(text) => handleChange(q.id, text)}
              className="border p-3 rounded"
              multiline
            />
          </View>
        ))}
        <ButtonPrimary title="Submit Survey" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};
