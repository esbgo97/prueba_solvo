import React, { Component, createRef } from 'react'
import { View, Text, TextInput, FlatList, Button, ActivityIndicator } from 'react-native'

import GlobalStyles from '../../utils/GlobalStyles'
import Box from '../partials/Box'
import ListItem from '../partials/ListItem'

export default class CountriesScreen extends Component {
    countriesCache = []
    state = {
        countries: [],
        loading: false
    }
    btnClear = createRef()
    componentDidMount() {
        this.setState({ loading: true })
        fetch("https://restcountries.eu/rest/v2/all").then(resp => {
            return resp.json()
        }).then(data => {
            this.countriesCache = data;
            this.setState({
                countries: data,
                loading: false
            });
        })
    }

    searchFilter = (text) => {
        var filtered = this.countriesCache.filter(item => {
            return (item["name"]).includes(text);
        })

        this.setState({
            countries: filtered
        })
    }

    render() {
        if (this.state.loading) {
            return <View style={GlobalStyles.body}>
                <ActivityIndicator size="large" />
                <Text>Loading Countries...</Text>
            </View>

        }
        return (<View style={GlobalStyles.body}>
            <Text style={GlobalStyles.title}>Countries List</Text>
            <View style={GlobalStyles.inLine}>
                <TextInput placeholder="Search"
                    ref={this.btnClear}
                    onChangeText={(val) => this.searchFilter(val)}
                />
                <Button onPress={() => { this.btnClear.current.clear(); this.searchFilter("") }} style={GlobalStyles.smBtn} title="Clear" />
            </View>
            <Box height={50} />
            <FlatList
                data={this.state.countries}
                keyExtractor={(item)=>item.name}
                renderItem={(item) => {
                    return <ListItem key={item.index}
                        title={item.item["alpha3Code"] + " - " + item.item["name"]}
                        description={item.item["nativeName"]}
                        image={item.item["flag"]}
                        item={item.item}
                        navigation={this.props.navigation}
                        onPress={() => { this.props.navigation.navigate("DetailedCountry", { country: item.item }) }} />
                }} />

        </View>)
    }


}