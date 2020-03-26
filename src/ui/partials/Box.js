import React from 'react'
import { View, Text } from 'react-native'

const Box = ({ height = 1, width = 1, color = "transparent", children = null }) => {
    return (<View style={{ width: width, height: height, backgroundColor: color, justifyContent: "center", alignItems: "center" }}>
        {children}
    </View >)
}

export default Box