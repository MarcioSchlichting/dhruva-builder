import React, { 
    ReactElement,
    useRef, 
    useState } from 'react';
import { View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { DropdownItem } from './constants';
import DropdownText from './DropdownText';

type DropdownProps = {
    label: string
    items: Array<DropdownItem>
    onSelect: 
}

const Dropdown = ({ 
    label, 
    items,
    onSelect } : DropdownProps) : ReactElement<any, any> => {
    
    const DropdownButton = useRef()

    const [dropdownTop, setDropdownTop] = useState(0)
    const [visible, setVisible] = useState(true)

    const handleVisibility = () => {
        setVisible(!visible)
    }

    return (
        <TouchableOpacity
            onPress={handleVisibility}>
            <View style={[{top: dropdownTop}]}>
                <FlatList
                data={items}
                renderItem={DropdownText}
                keyExtractor={(_, index) => index.toString()}
                />
            </View>
        </TouchableOpacity>
    )

}

export default Dropdown;