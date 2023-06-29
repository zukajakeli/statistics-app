import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../constants/theme";

interface Props {
  item: {
    color: string;
    startAge: number;
    endAge: number;
  };
}

const SegmentBox: React.FC<Props> = ({ item }) => (
  <View style={styles.row}>
    <View style={[styles.box, { backgroundColor: item.color }]} />
    <Text style={styles.boxText}>
      {item.endAge === Infinity
        ? `${item.startAge}+`
        : `${item.startAge}-${item.endAge}`}
    </Text>
  </View>
);

export default SegmentBox;

const styles = StyleSheet.create({
  row: { flexDirection: "row", marginRight: 10, alignItems: "center" },
  box: {
    width: 20,
    height: 20,
  },
  boxText: {
    marginLeft: 2,
    marginTop: 2,
    color: colors.TEXT_SECONDARY,
  },
});
