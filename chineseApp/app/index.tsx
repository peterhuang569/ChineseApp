// App.tsx
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Timeline from '../components/Timeline';

<<<<<<< HEAD
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
=======
const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Timeline />
    </SafeAreaView>
>>>>>>> 7058b12bcc804f2952732202d63c3a1085350054
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
