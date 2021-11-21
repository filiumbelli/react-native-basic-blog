import React from "react";
import Spinner from "react-native-loading-spinner-overlay";
import { View } from "react-native-web";
import { Context } from "../context/BlogContext";
import BlogForm from "./BlogForm";


const EditScreen = ({ navigation, route }) => {
    const { editBlogPost } = React.useContext(Context);
    const [inProgress, setInProgress] = React.useState(false);

    const onSubmitEdit = (item) => {
        setInProgress(true);
        editBlogPost(item).finally(() => {
            navigation.navigate("HomeScreen", { redirected: "Edit" });
        })

    }
    return <View>
        <Spinner visible={inProgress} />
        <BlogForm onSubmitForm={onSubmitEdit} initialValue={route.params} buttonTitle={"Edit Post"} />
    </View>
}


export default EditScreen;