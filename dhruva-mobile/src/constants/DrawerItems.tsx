import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";

type DrawerVO = {
    name: string
    screen: () => JSX.Element
}

var items : DrawerVO[] = [
    { name: 'Home', screen: ProfileScreen },
    { name: 'Settings', screen: SettingsScreen }
]

export default items;
