import React from "react";
import Spinner from "react-native-loading-spinner-overlay";


import { View } from "react-native-web";
import { Context } from "../context/BlogContext";
import BlogForm from "./BlogForm";


const AddScreen = ({ navigation }) => {

    const [inProgress, setInProgress] = React.useState(false);

    const { addBlogPost } = React.useContext(Context);

    const onPressSave = (item) => {
        setInProgress(true);
        addBlogPost(item).finally(() => {
            setInProgress(false);
            navigation.navigate("HomeScreen", inProgress);
        });


    }

    return <View>
        <Spinner visible={inProgress} />
        <BlogForm onSubmitForm={onPressSave} buttonTitle={"Add Post"} />
    </View>
}



export default AddScreen;