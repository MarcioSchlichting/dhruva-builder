import { 
    Text, 
    TextInput,
    TextInputProps, 
    View } from "react-native";

interface TextFieldProps extends TextInputProps {
    label: string
}

const TextField = ({ label, ...inputProps } : TextFieldProps) : JSX.Element => (
    <View>
        <Text>{ label }</Text>
        <TextInput {...inputProps}/>
    </View>
)

export default TextField;