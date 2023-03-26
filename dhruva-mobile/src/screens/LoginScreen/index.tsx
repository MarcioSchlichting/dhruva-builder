import { useEffect } from "react";
import { Button, View } from "react-native";
import { useForm } from 'react-hook-form'

import TextField from "../../components/TextField";
import { translate } from "../../locales";

const LoginScreen = () => {
    const { register, setValue, handleSubmit } = useForm()

    const fields = [
        { label: 'email', placeholder: translate('placeholders.email') },
        { label: 'password', placeholder: translate('placeholders.password') }
    ]

    useEffect(() => {
        fields.
            forEach(f => register(f.label))
    }, [register])

    return (
        <View>
            {
                fields
                    .map((f, i) => 
                        <TextField 
                            key={i}
                            label={f.label}
                            placeholder={f.placeholder}
                            onChangeText={t => setValue(f.label, t)}/>)
            }
            <Button
                onPress={() => {}} 
                title={translate('placeholders.continue')}/>
        </View>);
}

export default LoginScreen;