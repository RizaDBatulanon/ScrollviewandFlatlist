import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Scroll from "./scroll";
import FlatList from "./flatlist";

export default function App() {
  return (
    <View style={styles.container}>
      <Scroll/>
      <FlatList/>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
