import { useState } from 'react';

export type GridItem = {
  id: string;
  label: string;
  value: number;
  selected: boolean;
};

export function useSurveyGrid(initialItems: GridItem[] = []) {
  const [items, setItems] = useState<GridItem[]>(initialItems);

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const updateItemValue = (id: string, value: number) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value } : item))
    );
  };

  const resetGrid = () => {
    setItems((prev) => prev.map((item) => ({ ...item, selected: false, value: 0 })));
  };

  const totalValue = items.reduce((sum, item) => sum + item.value, 0);

  return { items, toggleItem, updateItemValue, resetGrid, totalValue };
}
