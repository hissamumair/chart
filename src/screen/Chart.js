import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const Chart = ({ data }) => {
  // Ensure data is an array (empty or not)
  const barData = data || [];

  // Use useWindowDimensions hook to get the window dimensions
  const windowWidth = useWindowDimensions().width;

  // Check if barData is defined and not empty before rendering
  if (!barData || barData.length === 0) {
    return null; // Or any fallback component/message
  }

  return (
    <View>
      <BarChart
        style={{ marginTop: 20 }}
        data={barData}
        width={windowWidth}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForBars: {
            frontColor: 'lightgray',
            barWidth: 22,
            borderRadius: 4,
          },
        }}
      />
    </View>
  );
};

export default Chart;
