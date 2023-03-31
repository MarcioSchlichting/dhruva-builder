import { ReactElement, useState } from "react"
import { Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { DropdownItem } from "../constants"

const DropdownText = ({ item, onSelect } : any) : ReactElement<any, any> => (
    <TouchableOpacity onPress={() => onSelect(item)}>
        <Text>{item.label}</Text>
    </TouchableOpacity>)

export default DropdownText;