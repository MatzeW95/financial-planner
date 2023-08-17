import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import jsonData from '../data/data.json';

const generateColors = count => {
  const colors = [];

  const maxLightness = 70;
  const minLightness = 40;
  const lightnessDifference = maxLightness - minLightness;

  for (let i = 0; i < count; i++) {
    const hue = 208; // Hue for the base color (#0085f2)
    const saturation = 100; // Max saturation
    const lightness = maxLightness - (i * (lightnessDifference / count)); // Adjust lightness
    colors.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
  }
  return colors;
};

const ChartExpensesAll = () => {
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    setExpenseData(jsonData.data.expenses);
  }, []);

  const data = {
    labels: expenseData.map(expense => expense.name),
    datasets: [
      {
        data: expenseData.map(expense => parseFloat(expense.amount)),
        backgroundColor: generateColors(expenseData.length) // Generate dynamic colors
      }
    ]
  };

  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default ChartExpensesAll;
