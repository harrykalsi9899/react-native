import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import {DrawerContent} from './screens/DrawerContent';
import WalletScreen from './screens/WalletScreen';
import HistoryScreen from './screens/HistoryScreen';
import ReviewScreen from './screens/ReviewScreen';
import RootStackScreen from './screens/RootStackScreen';
import {ActivityIndicator, View} from 'react-native';
import {AuthContext} from './components/context';
import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();

const App = () => {
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETREIVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (userName, password) => {
        let userToken;
        userToken = null;
        if (userName == 'user' && password == 'pass') {
          try {
            userToken = 'hdfhdf';
            await AsyncStorage.setItem('userToken', userToken);
          } catch (e) {
            console.log(e);
          }
        }
        // console.log('user token', userToken);
        dispatch({type: 'LOGIN', id: userName, token: userToken});
        // setUserToken('kk');
        // setIsLoading(false);
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        // setUserToken(null);
        // setIsLoading(false);
        dispatch({type: 'LOGOUT'});
      },
      signUp: () => {
        //   setUserToken('kk');
        //   setIsLoading(false);
      },
    }),
    [],
  );

  React.useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }

      // console.log('user token', userToken);

      dispatch({type: 'RETREIVE_TOKEN', token: userToken});

      // setIsLoading(false);
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="WalletScreen" component={WalletScreen} />
            <Drawer.Screen name="HistoryScreen" component={HistoryScreen} />
            <Drawer.Screen name="ReviewScreen" component={ReviewScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
