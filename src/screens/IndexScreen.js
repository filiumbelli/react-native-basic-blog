import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList } from "react-native-web";
import BlogContext from "../context/BlogContext";


const IndexScreen = ({ navigation }) => {

    const posts = React.useContext(BlogContext);

    const onPressTitle = (item) => {
        navigation.navigate("ShowScreen", item);
    }

    const renderItem = ({ item }) => {
        return <TouchableOpacity onPress={() => onPressTitle(item)}>
            <Text>{item.title}</Text>
        </TouchableOpacity>
    }


    return <View>
        <Text>Index Screen</Text>
        <FlatList
            data={posts}
            keyExtractor={(post) => post.title}
            renderItem={renderItem}
        />
    </View>
}


const styles = StyleSheet.create({});



export default IndexScreen;

