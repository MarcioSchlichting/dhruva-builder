import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerItems from '../../constants/DrawerItems';

const Drawer = createDrawerNavigator();

const Sidebar = () => (
    <NavigationContainer>
        <Drawer.Navigator>
            {
                DrawerItems
                    .map((c,i) => <Drawer.Screen 
                        key={i} 
                        name={c.name} 
                        component={c.screen}/>)
            }
        </Drawer.Navigator>
    </NavigationContainer>
);

export default Sidebar;