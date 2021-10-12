/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// files
import ReduxNavigator from './ReduxTabNavigator';
import RQueryNavigator from './RQueryTabNavigator';
import TabBarIcon from '../components/common/TabBarIcon';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabParamList } from '../types/navigation';

const { Navigator, Screen } = createBottomTabNavigator<BottomTabParamList>();

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
export default function BottomTabNavigator(): JSX.Element {
  const colorScheme = useColorScheme();

  return (
    <Navigator
      initialRouteName="Redux"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      {/* redux screen */}
      <Screen
        name="Redux"
        component={ReduxNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-book" color={color} />
          ),
        }}
      />

      {/* TODO: react-query screen */}
      <Screen
        name="RQuery"
        component={RQueryNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-analytics" color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
