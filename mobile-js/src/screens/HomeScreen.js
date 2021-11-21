import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button, FlatList, TextInput, ActivityIndicator } from "react-native-web";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import Spinner from "react-native-loading-spinner-overlay";
const HomeScreen = ({ navigation, route }) => {

    const { state, fetchBlogPosts, deleteBlogPost } = React.useContext(Context);
    const [inProgress, setInProgress] = React.useState(false);

    React.useEffect(() => {
        setInProgress(true);
        fetchBlogPosts().then(() => {
            setInProgress(false);
        });
    }, []);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: "Home Page",
            headerRight: () => (<View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("AddScreen")}
                    title="Add"
                    color="#fff"
                >
                    <Feather style={styles.icon} name={"plus"} />
                </TouchableOpacity>
            </View>)
        });
    });


    const onPressTitle = (item) => {
        navigation.navigate("ShowScreen", { item });
    }
    const onPressDelete = (id) => {
        setInProgress(true);
        deleteBlogPost(id).finally(() => setInProgress(false))
    }
    const renderItem = ({ item }) => {
        return (<View style={styles.row}>
            <TouchableOpacity onPress={() => onPressTitle(item)} >
                <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
            <Feather onPress={() => onPressDelete(item.id)} name="trash" style={styles.icon} />
        </View>);
    }


    return <View>
        <Spinner visible={inProgress} style={styles.loading} size="large" color="#000" />
        <FlatList
            data={state}
            keyExtractor={(post) => post.id}
            renderItem={renderItem}
        />
    </View>
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderTopWidth: 1,
        borderColor: "gray"
    },
    title: {
        fontSize: 18,

    },
    icon: {
        marginHorizontal: 12,
        fontSize: 28
    },
    loading: {
        opacity: 0.5
    }
});

export default HomeScreen;

