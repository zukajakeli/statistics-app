import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import PieChart from "react-native-pie-chart";
import { colors } from "../constants/theme";
import SegmentBox from "./SegmentBox";

interface Props {
  data: string[];
}

const Chart: React.FC<Props> = ({ data }) => {
  const [chartData, setChartData] = useState([1, 1, 1, 1]);
  const widthAndHeight = 250;
  const sliceColor = ["#274653", "#289D8E", "#EAC36A", "#F4A261"];
  const ageQuantities = {
    to18: 0,
    from19to35: 0,
    from36to70: 0,
    from70: 0,
  };
  const segmentation = [
    { startAge: 0, endAge: 18, color: "#274653" },
    { startAge: 19, endAge: 35, color: "#289D8E" },
    { startAge: 36, endAge: 70, color: "#EAC36A" },
    { startAge: 70, endAge: Infinity, color: "#F4A261" },
  ];

  const serializeData = () => {
    data.forEach((item) => {
      const age = Number(item[1]);
      if (age <= 18) ageQuantities.to18++;
      if (age > 18 && age <= 35) ageQuantities.from19to35++;
      if (age > 35 && age <= 70) ageQuantities.from36to70++;
      if (age > 70) ageQuantities.from70++;
    });

    setChartData(Object.values(ageQuantities));
  };

  useEffect(() => {
    serializeData();
  }, [data]);

  const shouldRenderChart = chartData.reduce((a, b) => a + b) > 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Segmentation</Text>
      {shouldRenderChart && (
        <PieChart
          widthAndHeight={widthAndHeight}
          series={chartData}
          sliceColor={sliceColor}
        />
      )}
      <Text style={styles.title}>Index</Text>
      <View style={styles.boxContainer}>
        {segmentation.map((item, index) => (
          <SegmentBox key={`segment${index}`} item={item} />
        ))}
      </View>
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  boxContainer: {
    flexDirection: "row",
    gap: 3,
    marginTop: 20,
  },

  title: {
    fontSize: 16,
    marginVertical: 10,
    opacity: 0.7,
  },
});
