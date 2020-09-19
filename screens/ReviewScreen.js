import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';

const ReviewScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>here are all the reviews</Text>
      <Title>Hello</Title>
    </View>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
