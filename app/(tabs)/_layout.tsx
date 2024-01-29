import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Fontisto } from '@expo/vector-icons';

import Colors from '@/constants/Colors';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Male User',
          tabBarIcon: ({ color, size }) => <Fontisto name="male" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Female User',
          tabBarIcon: ({ color, size }) => <Fontisto name="female" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
