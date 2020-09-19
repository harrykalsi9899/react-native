import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Switch, Title} from 'react-native-paper';

const WalletScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title>Money = 100 $</Title>
      <Switch />
    </View>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
