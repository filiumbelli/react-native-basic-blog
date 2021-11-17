import React from "react";
import { View, Text, StyleSheet } from "react-native-web";



const ShowScreen = ({ route }) => {
    const { title } = route.params;
    return <View>
        <Text>{title}</Text>
    </View>
}

const style = StyleSheet.create({});

export default ShowScreen;