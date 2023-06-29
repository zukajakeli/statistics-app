import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Statistics from "./src/statistics/Statistics";
import { colors } from "./src/constants/theme";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Statistics />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    paddingTop: 40,
    paddingBottom: 20,
  },
});
