import { StyleSheet, Text, View } from "react-native";

export default function Index() {
    const style = StyleSheet.create({
        container : {
            flex: 1
        }
        })
  return (
    <View style = {style.container}>
      <Text>HI</Text>
    </View>
  );
  
}
