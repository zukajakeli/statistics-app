import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/theme";

interface Props {
  data: string[];
}

interface ItemProps {
  item: string;
  firstItemStyles: any;
}

const Table: React.FC<Props> = ({ data }) => {
  const Item = ({ item, firstItemStyles }: ItemProps) => (
    <View style={[styles.item, firstItemStyles?.container]}>
      <Text style={[styles.text, firstItemStyles?.text]}>{item[0]}</Text>
      <Text style={[styles.text, firstItemStyles?.text]}>{item[1]}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        nestedScrollEnabled
        data={data}
        renderItem={({ item, index }) => (
          <Item
            item={item}
            firstItemStyles={index === 0 ? firstItemStyles : {}}
          />
        )}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

export default Table;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 40,
  },

  item: {
    flexDirection: "row",
    gap: 10,
    borderTopColor: "#EDEAF0",
    borderTopWidth: 1,
    paddingTop: 20,
    marginBottom: 10,
  },
  text: {
    flex: 1,
  },
});

const firstItemStyles = {
  container: {
    borderTopWidth: 0,
  },
  text: {
    color: colors.TEXT_SECONDARY,
  },
};
