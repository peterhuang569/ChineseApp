// components/Timeline.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, Animated, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  time: string;
  color: string;
  image: string;
}

const events: TimelineEvent[] = [
  { id: '1', title: 'Xia Dynasty', description: 'Description of Xia Dynasty', time: '2070–1600 BC', color: '#FF6347', image: 'https://www.thechairmansbao.com/wp-content/uploads/2018/03/Yu-the-Great-1.png' },
  { id: '2', title: 'Shang Dynasty', description: 'Description of Shang Dynasty', time: '1600–1046 BC', color: '#6A5ACD', image: 'https://example.com/shang.jpg' },
  { id: '3', title: 'Zhou Dynasty', description: 'Description of Zhou Dynasty', time: '1046–256 BC', color: '#FFD700', image: 'https://example.com/zhou.jpg' },
  { id: '4', title: 'Qin Dynasty', description: 'Description of Qin Dynasty', time: '221–206 BC', color: '#40E0D0', image: 'https://example.com/qin.jpg' },
  // Add more events as needed
];

const Timeline: React.FC = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const ITEM_HEIGHT = 200;

  const renderItem = ({ item, index }: { item: TimelineEvent; index: number }) => {
    const isLeft = index % 2 === 0;

    const scale = scrollY.interpolate({
      inputRange: [ITEM_HEIGHT * (index - 1), ITEM_HEIGHT * index, ITEM_HEIGHT * (index + 1)],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });

    const opacity = scrollY.interpolate({
      inputRange: [ITEM_HEIGHT * (index - 1), ITEM_HEIGHT * index, ITEM_HEIGHT * (index + 1)],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });

    const handlePress = () => {
      // navigation.navigate('Details', { item });
    };

    return (
      <View style={[styles.eventContainer, isLeft ? styles.eventContainerLeft : styles.eventContainerRight]}>
        <View style={[styles.timeline, isLeft ? styles.timelineLeft : styles.timelineRight]}>
          <View style={[styles.circle, { backgroundColor: item.color }]} />
          <View style={styles.line} />
        </View>
        <Animated.View style={[styles.eventContent, { transform: [{ scale }], opacity }]}>
          <ImageBackground source={{ uri: item.image }} style={styles.backgroundImage} imageStyle={styles.imageStyle}>
            <TouchableOpacity style={styles.touchableContent} onPress={handlePress}>
              <Text style={styles.eventTime}>{item.time}</Text>
              <Text style={styles.eventTitle}>{item.title}</Text>
              <Text style={styles.eventDescription}>{item.description}</Text>
            </TouchableOpacity>
          </ImageBackground>
        </Animated.View>
      </View>
    );
  };

  return (
    <Animated.FlatList
      data={events}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  eventContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  eventContainerLeft: {
    justifyContent: 'flex-start',
  },
  eventContainerRight: {
    justifyContent: 'flex-end',
    flexDirection: 'row-reverse',
  },
  timeline: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  timelineLeft: {
    alignItems: 'flex-end',
  },
  timelineRight: {
    alignItems: 'flex-start',
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    zIndex: 1,
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: '#007AFF',
    marginTop: -5,
  },
  eventContent: {
    flex: 1,
    borderRadius: 5,
    height: 200,
    overflow: 'hidden', // Ensure content doesn't overflow rounded corners
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    opacity: 0.5, // Adjust opacity of the background image
  },
  touchableContent: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark background for better text visibility
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventTime: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 5,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  eventDescription: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Timeline;
