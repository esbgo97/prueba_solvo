import React, { Component } from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'

import GlobalStyles from '../../utils/GlobalStyles'
import MainContainer from '../partials/MainContainer'
import ListItem from '../partials/ListItem'

export default class CountriesScreen extends Component {
    countriesCache = []
    state = {
        countries: [],
    }
    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/all").then(resp => {
            return resp.json()
        }).then(data => {
            this.countriesCache = data;
            this.setState({
                countries: data
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
        return (
            <MainContainer>
                <View style={GlobalStyles.sectionContainer}>
                    <Text style={GlobalStyles.sectionTitle}>Countries List</Text>
                    <TextInput placeholder="Search"
                        onChangeText={(val) => this.searchFilter(val)}
                    />
                    <FlatList
                        data={this.state.countries}
                        renderItem={(item) => {
                            return <ListItem key={item.index} 
                                title={item.item["alpha3Code"]+" - "+item.item["name"]}
                                description={item.item["nativeName"]} 
                                image={item.item["flag"]} item={item.item} />
                        }} />
                </View>
            </MainContainer>
        )
    }


}