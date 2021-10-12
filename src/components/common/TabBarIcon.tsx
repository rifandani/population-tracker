import React from 'react';
import { Ionicons } from '@expo/vector-icons';

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
export default function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}): JSX.Element {
  const { name, color } = props;

  return (
    <Ionicons
      size={30}
      style={{ marginBottom: -3 }}
      // {...props}
      name={name}
      color={color}
    />
  );
}
