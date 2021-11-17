import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList, TextInput } from "react-native-web";
import BlogContext from "../context/BlogContext";


const IndexScreen = ({ navigation }) => {
    const context = React.useContext(BlogContext);
    const { data, addBlogPost } = context;

    const [textValue, setTextValue] = React.useState("");
    const onChangeText = (e) => setTextValue(e.target.value);

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
        <TextInput placeholder="Add new post" value={textValue} onChange={onChangeText} />

        <Button title="Add new Post" onPress={() => addBlogPost(textValue)} disabled={textValue.length < 5} />
        <FlatList
            data={data}
            keyExtractor={(post) => post.title}
            renderItem={renderItem}
        />
    </View>
}


const styles = StyleSheet.create({});



export default IndexScreen;

