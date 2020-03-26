import React from 'react'
import { View, Text, } from "react-native"
import GlobalStyles from "../../utils/GlobalStyles"
import Divider from './Divider'

const ListItem = ({ title, description, image, item }) => {
    return <View style={GlobalStyles.itemList}>
        
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Divider />
    </View>
}

export default ListItem