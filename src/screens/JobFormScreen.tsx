// src/screens/JobFormScreen.tsx
import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Button } from 'react-native';

export const JobFormScreen: React.FC = () => {
  const [customer, setCustomer] = useState('');
  const [jobType, setJobType] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = () => {
    console.log({ customer, jobType, notes });
    // TODO: handle form submission
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 p-6 bg-white">
        <Text className="text-xl font-bold mb-4">New Job</Text>

        <TextInput
          placeholder="Customer Name"
          value={customer}
          onChangeText={setCustomer}
          className="border p-3 mb-3"
        />

        <TextInput
          placeholder="Job Type"
          value={jobType}
          onChangeText={setJobType}
          className="border p-3 mb-3"
        />

        <TextInput
          placeholder="Notes"
          value={notes}
          onChangeText={setNotes}
          className="border p-3 mb-3"
        />

        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};
