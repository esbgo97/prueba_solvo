import React from 'react'
import { View, Text, Button } from "react-native"

import GlobalStyles from '../../utils/GlobalStyles'
import { SvgUri } from 'react-native-svg'

import Box from '../../ui/partials/Box'

const DetailedCountry = ({ route, navigation }) => {

    if (!route.params || !route.params.country) {
        alert("No selected Country", "", [
            { text: "Ok", onPress: () => navigation.goBack() }
        ], { cancelable: false });

        return (<View style={GlobalStyles.body}>
            <Text>Loading...</Text>
            <Button title="Back" onPress={() => navigation.navigate("Countries")} />
        </View>)
    }
    let country = route.params.country
    return <View style={GlobalStyles.body}>
        <SvgUri
            width={100}
            height={100}
            uri={country.flag}
        />
        <Text style={GlobalStyles.title}>{country.name}</Text>

        <Text>Region: {country.region}</Text>
        <Box height={20} />
        <View>
            <Text >Languajes:</Text>
            {country.languages.map((lang, i) => <Text style={GlobalStyles.langs} key={i} >- {lang.name}: {lang.nativeName}</Text>)}
        </View>
        <Box height={20} />
        <Button title="Back" onPress={() => navigation.navigate("Countries")} />
    </View>
}

export default DetailedCountry