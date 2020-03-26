import React from 'react'
import { View, Text, Button } from 'react-native'
import { SvgUri } from 'react-native-svg'
import GlobalStyles from '../../utils/GlobalStyles'
import Box from '../partials/Box'



const HomeScreen = ({ navigation }) => {
    return (
        <View style={GlobalStyles.body}>
            <View style={GlobalStyles.body}>
                <Text style={GlobalStyles.title}>Hello Solvo</Text>
                <Text>by esbgo97</Text>
                <Box height={50} />
                <SvgUri
                    width={100}
                    height={100}
                    uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
                />
            </View>
            <Button
                onPress={() => navigation.navigate('Countries')}
                title="Go to Countries list"
            />
            <Box height={200} />
        </View>
    )

}

export default HomeScreen