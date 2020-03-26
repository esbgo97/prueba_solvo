import React from 'react'
import { View, Text, Button } from 'react-native'
import GlobalStyles from '../../utils/GlobalStyles'
import Box from '../partials/Box'



const MoreScreen = ({ navigation }) => {
    return (
        <View style={GlobalStyles.body}>
            <View style={GlobalStyles.body}>
                <Text style={GlobalStyles.title}>More Screen</Text>
            </View>
            <Button
                onPress={() => navigation.goBack()}
                title="Back"
            />
            <Box height={200} />
        </View>
    )

}

export default MoreScreen