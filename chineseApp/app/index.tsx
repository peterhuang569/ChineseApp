import { StyleSheet, Text, View } from "react-native";

export default function Index() {
    const style = StyleSheet.create({
        container : {
            flex: 1,
            fontSize:3,
            
        }
        })
  return (
    <View style = {style.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>


  );
  
}
