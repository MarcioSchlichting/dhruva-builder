import React, { 
    useRef, 
    useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { DropdownItem } from './constants';

type DropdownProps = {
    label: string
    items: Array<DropdownItem>
    onSelect: 
}

const Dropdown = ({ 
    label, 
    items,
    onSelect } : DropdownProps) => {
    
    const DropdownButton = useRef()

    const [dropdownTop, setDropdownTop] = useState(0)
    const [visible, setVisible] = useState(true)

    const handleVisibility = () => {
        setVisible(!visible)
    }

    return (
        <TouchableOpacity
            ref={DropdownButton}
            onPress={handleVisibility}>
            <View style={[{top: dropdownTop}]}>
                <FlatList
                data={items}
                renderItem={renderItem}
                />
            </View>
        </TouchableOpacity>
    )

}

export default Dropdown;