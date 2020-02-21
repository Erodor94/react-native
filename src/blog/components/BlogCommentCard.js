import React from 'react'
import { Button, View, StyleSheet, Text } from 'react-native'

const BlogCommentCard = ({ comment }) =>
    <View style={styles.card}>
        <Text style={styles.title}>{comment.name}</Text>
        <Text style={styles.content}>
            {comment.body}
        </Text>
    </View>

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black'
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    content: {
        marginTop: 5,
    }
})

export default BlogCommentCard