import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather } from '@expo/vector-icons'

import Home from './pages/Home';
import New from './pages/New';
import Notification from './pages/Notification';
import Profile from './pages/Profile';
import Search from './pages/Search';
import ButtonNew from './components/ButtonNew';



const Tabs = createBottomTabNavigator();


export default function Routes() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: "#121212",
          borderTopColor: 'transparent'
        },
        activeTintColor: '#fff',
        tabStyle: {
          paddingVertical: 5,
        }
      }}
    >
      <Tabs.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo
              name="home"
              size={size}
              color={color}
            />
          )
        }}
      />

      <Tabs.Screen
        name='Search'
        component={Search}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather
              name="search"
              size={size}
              color={color}
            />
          )
        }}
      />

      <Tabs.Screen
        name='New'
        component={New}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, size }) => (
            <ButtonNew size={size} focused={focused} />
          )
        }}
      />

      <Tabs.Screen
        name='Notification'
        component={Notification}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo
              name="notification"
              size={size}
              color={color}
            />
          )
        }}
      />

      <Tabs.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather
              name="user"
              size={size}
              color={color}
            />
          )
        }}
      />



    </Tabs.Navigator>
  )
}