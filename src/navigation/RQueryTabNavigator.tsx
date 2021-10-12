import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// files
import RQueryScreen from '../screens/RQueryScreen';
import { RQueryParamList } from '../types/navigation';

const RQueryStack = createStackNavigator<RQueryParamList>();

export default function RQueryNavigator(): JSX.Element {
  return (
    <RQueryStack.Navigator>
      <RQueryStack.Screen
        name="RQueryScreen"
        component={RQueryScreen}
        options={{ headerTitle: 'React Query' }}
      />
    </RQueryStack.Navigator>
  );
}
