// src/screens/DashboardScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { ButtonPrimary } from '../components/ButtonPrimary';
import { useAuth } from '../navigation/AuthContext'; // make sure path matches

type Customer = {
  id: string;
  customer_name: string;
};

export const DashboardScreen: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const { logout } = useAuth(); // access logout from AuthContext

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

  const handleAddCustomer = () => {
    console.log('Add customer button pressed');
    // TODO: Navigate to JobFormScreen
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', style: 'destructive', onPress: () => logout() },
      ],
      { cancelable: true }
    );
  };

  return (
    <View className="flex-1 p-4 bg-gray-50">
      <View className="flex-row justify-between items-center mb-4">
        <ButtonPrimary title="Add Customer" onPress={handleAddCustomer} icon="plus" />
        <ButtonPrimary title="Logout" onPress={handleLogout} icon="logout" />
      </View>

      <FlatList
        data={customers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="p-3 border-b border-gray-300">
            <Text className="font-semibold">{item.customer_name}</Text>
          </View>
        )}
      />
    </View>
  );
};
