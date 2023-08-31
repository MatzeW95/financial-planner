import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import jsonData from '../data/data.json';

const generateColors = count => {
  const colors = [];

  const maxLightness = 50;
  const minLightness = 20;
  const lightnessDifference = maxLightness - minLightness;

  for (let i = 0; i < count; i++) {
    const hue = 208; // Hue for the base color (#0085f2)
    const saturation = 100; // Max saturation
    const lightness = maxLightness - (i * (lightnessDifference / count)); // Adjust lightness
    colors.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
  }
  return colors;
};

const ChartIncomesAll = ({showLegend}) => {
  const [incomesData, setincomesData] = useState([]);

  useEffect(() => {
    setincomesData(jsonData.data.incomes);
  }, []);

  const data = {
    labels: incomesData.map(incomes => incomes.name),
    datasets: [
      {
        data: incomesData.map(incomes => parseFloat(incomes.amount)),
        backgroundColor: generateColors(incomesData.length) // Generate dynamic colors
      }
    ]
  };

  const options = {
    plugins: {
        legend: {
            display: !showLegend
        },
        tooltip: {
          enabled: !showLegend
        }
    },
    hover: {mode: null}
  };

  return (
    <div>
      <Doughnut className='ChartOverview' data={data} options={options}/>
    </div>
  );
};

export default ChartIncomesAll;
