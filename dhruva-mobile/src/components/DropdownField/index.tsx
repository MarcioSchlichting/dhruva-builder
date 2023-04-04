import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useTranslation } from "react-i18next";

// const data = [
//     { label: 'Item 1', value: '1' },
//     { label: 'Item 2', value: '2' },
//     { label: 'Item 3', value: '3' },
//     { label: 'Item 4', value: '4' },
//     { label: 'Item 5', value: '5' },
//     { label: 'Item 6', value: '6' },
//     { label: 'Item 7', value: '7' },
//     { label: 'Item 8', value: '8' },
// ];  Mock data.

type DrodpwnFieldProps = {
    label: string
    values: Array<{label: string, value: string }>
}

const DropdownField = ({ label, values} : DrodpwnFieldProps) => {
    const { t } = useTranslation()
    const [value, setValue] = useState<string>()
    const [isFocused, setIsFocused] = useState<boolean>(false)

    const renderLabel = () => {
        if (value || isFocused)
            return (
            <Text>
                { label }
            </Text>)

        return <></>;
    }

    return (<View>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocused && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={values}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocused ? t('placeholder.selectItem') as string : '...'}
          searchPlaceholder={t('placeholder.search') as string}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={item => {
            setValue(item);
            setIsFocused(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocused ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
    </View>)
}

export default DropdownField;

const styles = StyleSheet.create({
    dropdown: {
      margin: 16,
      height: 50,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });