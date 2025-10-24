// src/screens/DashboardScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

type Customer = {
  id: string;
  customer_name: string;
};

export const DashboardScreen: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  // Example: fetch customers (replace with real API)
  useEffect(() => {
    const fetchCustomers = async () => {
      const data: Customer[] = [
        { id: '1', customer_name: 'Alice' },
        { id: '2', customer_name: 'Bob' },
      ];
      setCustomers(data);
    };

    fetchCustomers();
  }, []);

  return (
    <View className="flex-1 p-4 bg-gray-50">
      <FlatList
        data={customers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity className="p-3 border-b border-gray-300">
            <Text className="font-semibold">{item.customer_name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
