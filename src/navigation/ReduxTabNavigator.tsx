import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// files
import ReduxScreen from '../screens/ReduxScreen';
import { ReduxParamList } from '../types/navigation';

const ReduxStack = createStackNavigator<ReduxParamList>();

export default function ReduxNavigator(): JSX.Element {
  return (
    <ReduxStack.Navigator>
      <ReduxStack.Screen
        name="ReduxScreen"
        component={ReduxScreen}
        options={{ headerTitle: 'Redux Persist With AsyncStorage' }}
      />
    </ReduxStack.Navigator>
  );
}
