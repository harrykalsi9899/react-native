import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    style={{backgroundColor: 'tomato'}}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Details"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({color}) => (
          <Icon name="notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#694fad',
        tabBarIcon: ({color}) => <Icon name="person" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor: '#d02860',
        tabBarIcon: ({color}) => <Icon name="eye" color={color} size={26} />,
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTintStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Overview',
          headerLeft: () => (
            <Icon.Button
              name="grid"
              size={25}
              backgroundColor="#009387"
              onPress={() => navigation.openDrawer()}></Icon.Button>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const DetailsStackScreen = ({navigation}) => {
  return (
    <DetailsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTintStyle: {
          fontWeight: 'bold',
        },
      }}>
      <DetailsStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="grid"
              size={25}
              backgroundColor="#1f65ff"
              onPress={() => navigation.openDrawer()}></Icon.Button>
          ),
        }}
      />
    </DetailsStack.Navigator>
  );
};
