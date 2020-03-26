import React from 'react'
import { View, Text, Button } from 'react-native'
// import { SVGImage } from 'react-native-svg-image'
import GlobalStyles from '../../utils/GlobalStyles'
import Box from '../partials/Box'



const HomeScreen = ({ navigation }) => {
    return (
        <View style={GlobalStyles.body}>
            <View style={GlobalStyles.body}>
                <Text style={GlobalStyles.title}>Hello Solvo</Text>
                <Text>by esbgo97</Text>
            </View>
            <Button
                onPress={() => navigation.navigate('Countries')}
                title="Go to Countries list"
            />
            <Box height={200}/>
        </View>
    )

}

export default HomeScreen