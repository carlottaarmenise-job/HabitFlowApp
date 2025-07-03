import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const ProgressChart = ({ data = [] }) => {
  if (!data.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Progressi Settimanali</Text>
        <Text style={styles.emptyText}>Nessun dato disponibile.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progressi Settimanali</Text>
      <BarChart
        data={{
          labels: data.map((item) => item.label),
          datasets: [{ data: data.map((item) => item.value) }],
        }}
        width={screenWidth - 40}
        height={240}
        yAxisSuffix="%"
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`, // verde
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          propsForBackgroundLines: {
            stroke: '#e3e3e3',
          },
        }}
        fromZero
        showValuesOnTopOfBars
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    color: '#333',
    textAlign: 'center',
  },
  chart: {
    borderRadius: 8,
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    fontStyle: 'italic',
  },
});

export default ProgressChart;
