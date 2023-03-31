import { useState } from "react"
import { Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { DropdownItem } from "../constants"

type DropdownItemProps = {
    item: DropdownItem
    onPress: (item : any) => void
}

const DropdownItem = ({ item, onPress } : DropdownItemProps) => (
    <TouchableOpacity onPress={() => onPress(item)}>
        <Text>{item.label}</Text>
    </TouchableOpacity>)

export default DropdownItem;