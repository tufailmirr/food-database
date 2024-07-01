// components/__tests__/FoodTable.test.tsx
// @ts-nocheck

import React from 'react';

import  { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import FoodTable from '../Table/FoodTable';


const mockData = [
  {
    foodId: '1',
    label: 'Apple',
    nutrients: {
      ENERC_KCAL: '52',
      FAT: '0.2',
    },
  },
  {
    foodId: '2',
    label: 'Banana',
    nutrients: {
      ENERC_KCAL: '96',
      FAT: '0.3',
    },
  },
];

describe('FoodTable', () => {
  it('renders the table with the correct data', () => {
    render(<FoodTable data={mockData} />);

    // Check if the table headers are rendered
    expect(screen.getByText('Label')).toBeInTheDocument();
    expect(screen.getByText('Protein (g)')).toBeInTheDocument();
    expect(screen.getByText('Fat (g)')).toBeInTheDocument();

    // Check if the data rows are rendered correctly
    mockData.forEach(item => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
      expect(screen.getByText(item.nutrients.ENERC_KCAL)).toBeInTheDocument();
      expect(screen.getByText(item.nutrients.FAT)).toBeInTheDocument();
    });
  });
});
