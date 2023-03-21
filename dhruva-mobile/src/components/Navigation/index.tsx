import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerItems from './../../constants/DrawerItems';
import ProfileScreen from './../../screens/ProfileScreen';
import SettingsScreen from './../../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const components : JSX.Element = {
    "Profile" : ProfileScreen,
    "Settings" : SettingsScreen
}

const Navigation = () => (
    <NavigationContainer>
        <Drawer.Navigator
            drawerType='front'
            initialRouteName="Profile"
            drawerContentOptions={{
                activeTintColor: '#e91e63',
                itemStyle: { marginVertical: 10 },
            }}>
            {
                DrawerItems.map(d => <Drawer.Screen name={d.name} key={d.name} component={
                    components[d.name]
                }/>)
            }
        </Drawer.Navigator>
    </NavigationContainer>)