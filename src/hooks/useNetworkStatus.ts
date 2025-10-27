// src/hooks/useNetworkStatus.ts
import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

export const useNetworkStatus = (): boolean => {
  const [isConnected, setIsConnected] = useState<boolean>(true); // default to online

  useEffect(() => {
    // fetch initial connection status
    const fetchStatus = async () => {
      const state = await NetInfo.fetch();
      setIsConnected(state.isConnected ?? false);
    };
    fetchStatus();

    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected ?? false);
    });

    return () => unsubscribe();
  }, []);

  return isConnected;
};
