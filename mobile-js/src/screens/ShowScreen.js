import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native-web";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";


const ShowScreen = ({ navigation, route }) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: "Post Screen",
            headerRight: () => (
                <View>
                    <TouchableOpacity onPress={onPressEdit}>
                        <EvilIcons name="pencil" style={styles.icon} color={"#000"} />
                    </TouchableOpacity>
                </View>
            )
        })
    });
    const onPressEdit = () => {
        navigation.navigate("EditScreen", route.params.item)
    }
    const { state } = React.useContext(Context);
    const { id } = route.params.item;

    const selectedPost = state.find(post => post.id == id)

    return (<View>
        <Text>id: {selectedPost.id} </Text>
        <Text>{selectedPost.title}</Text>
        <Text>{selectedPost.content}</Text>
    </View>)
}

const styles = StyleSheet.create({
    icon: {
        marginHorizontal: 12,
        fontSize: 24
    }
});

export default ShowScreen;