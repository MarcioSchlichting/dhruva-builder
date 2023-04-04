import { View, Text } from "react-native";
import DropdownField from "../../components/DropdownField";

const ProfileScreen = () : JSX.Element => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <DropdownField/>
    </View>
);

export default ProfileScreen;