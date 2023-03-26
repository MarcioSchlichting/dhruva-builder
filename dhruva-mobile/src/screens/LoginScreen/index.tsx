import { View } from "react-native";
import { translate } from "../../locales";

const LoginScreen = () => {
    const fields = [
        { label: 'E-mail', placeholder: translate('placeholders.email') },
        { label: 'Password', placeholder: translate('placeholders.password') }
    ]

    return (
        <View>
            {
                // fields
                //     .map((f, i) => <TextField 
                //         label={f.label}
                //         placeholder={f.placeholder}
                //         />)
            }
        </View>
    );
}

export default LoginScreen;