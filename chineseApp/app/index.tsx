// App.tsx
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Timeline from '../components/Timeline';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Timeline />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
