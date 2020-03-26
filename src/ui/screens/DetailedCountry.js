import React, { createRef, useState } from 'react'
import { View, Text, Button } from "react-native"
import MapView from 'react-native-maps'

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

    const [region, setRegion] = useState({
        latitude: country.latlng[0],
        longitude: country.latlng[1],
        latitudeDelta: 1,
        longitudeDelta: 1,
    })

    const mapRef = createRef();


    return <View style={GlobalStyles.body}>
        <SvgUri
            width={100}
            height={100}
            uri={country.flag}
        />
        <Text style={GlobalStyles.title}>{country.name}</Text>

        <Text>Region: {country.region}</Text>
        <Text>Location: {country.latlng[0]} | {country.latlng[1]}</Text>
        <View>
            <Text >Languajes: </Text>
            {country.languages.map((lang, i) => <Text style={GlobalStyles.langs} key={i} >- {lang.name}: {lang.nativeName}</Text>)}
        </View>
        <Box height={20} />
        <MapView
            ref={mapRef}
            region={region}
            style={{ height: 300, width: "100%" }}
            initialRegion={region}
            onRegionChange={(region) => setRegion(region)}
        />
        <Box height={10} />
        <Text>Position: ({region.latitude})({region.longitude})</Text>
        <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
}

export default DetailedCountry