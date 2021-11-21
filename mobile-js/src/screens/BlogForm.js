import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native-web";


const defaultValue = {
    id: undefined,
    title: "",
    content: ""
}


const BlogForm = ({ onSubmitForm, buttonTitle, initialValue = defaultValue }) => {

    const [id, setId] = useState(initialValue.id);
    const [title, setTitle] = useState(initialValue.title);
    const [content, setContent] = useState(initialValue.content);

    React.useEffect(() => {
        setId(initialValue.id);
        setTitle(initialValue.title);
        setContent(initialValue.content);
    }, []);

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    return (
        <View>
            <TextInput style={styles.row} placeholder={"title"} onChange={onChangeTitle} value={title} />
            <TextInput style={styles.row} placeholder={"content"} onChange={onChangeContent} value={content} />
            <Button onPress={() => onSubmitForm({ id, title, content })} title={buttonTitle} />
        </View>
    )
}
BlogForm.defaultProps = {

}
const styles = StyleSheet.create({
    row: {
        marginVertical: 10,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontSize: 16,
        borderBottomWidth: 1,
    }
});
export default BlogForm;