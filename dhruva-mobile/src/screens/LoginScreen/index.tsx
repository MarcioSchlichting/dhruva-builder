import { useEffect } from "react";
import { Alert, Button, Text, View } from "react-native";
import { useForm } from 'react-hook-form'

import TextField from "../../components/TextField";
import { useTranslation } from "react-i18next";

const LoginScreen = () => {
    const { t } = useTranslation()
    const { register, setValue, handleSubmit } = useForm()

    const fields = [
        { label: 'email', placeholder: t('placeholders.email') },
        { label: 'password', placeholder: t('placeholders.password') }
    ]

    useEffect(() => {
        fields.
            forEach(f => register(f.label))
    }, [register])

    const onSubmit = (data : any)=> Alert.alert(data.email, data.password)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
                onPress={handleSubmit(onSubmit) } 
                title={t('placeholders.continue')}/>
        </View>);
}

export default LoginScreen;
