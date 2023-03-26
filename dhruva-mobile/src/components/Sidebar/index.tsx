import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '../../screens/ProfileScreen';
import SettingsScreen from '../../screens/SettingsScreen';

const Drawer= createDrawerNavigator();

const Components = [
    { name: 'Home', screen: ProfileScreen },
    { name: 'Settings', screen: SettingsScreen }
]

const Sidebar = () => (
    <NavigationContainer>
        <Drawer.Navigator>
            {
                Components
                    .map((c,i) => <Drawer.Screen 
                        key={i} 
                        name={c.name} 
                        component={c.screen}/>)
            }
        </Drawer.Navigator>
    </NavigationContainer>
);

export default Sidebar;