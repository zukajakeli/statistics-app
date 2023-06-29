import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../constants/theme";
import useStatistics from "./useStatisticsApi";
import Table from "./Table";
import Chart from "./Chart";

const Statistics: React.FC = () => {
  const { data } = useStatistics();

  return (
    <ScrollView style={styles.container}>
      <Table data={data} />
      <Chart data={data} />
    </ScrollView>
  );
};

export default Statistics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
});
