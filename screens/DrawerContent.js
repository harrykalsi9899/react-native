import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {AuthContext} from '../components/context';

export function DrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const {signOut} = React.useContext(AuthContext);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Icon name="person-circle" size={75} />
              <View>
                <Title style={styles.title}>Harpreet singh</Title>
                <Caption style={styles.title}>@itskalsi</Caption>
              </View>
            </View>
            {/* <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View> */}
          </View>
          <Drawer.Section>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="person" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="wallet" color={color} size={size} />
              )}
              label="Wallet"
              onPress={() => {
                props.navigation.navigate('WalletScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book" color={color} size={size} />
              )}
              label="History"
              onPress={() => {
                props.navigation.navigate('HistoryScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="settings" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="information-circle" color={color} size={size} />
              )}
              label="About"
              onPress={() => {}}
            />
          </Drawer.Section>
          <Drawer.Section title="preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="log-out" color={color} size={size} />
          )}
          label="SignOut"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },

  userInfoSection: {
    paddingLeft: 20,
    backgroundColor: '#FFC300',
  },

  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },

  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },

  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
