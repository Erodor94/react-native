import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { withNavigation } from 'react-navigation'
import { ROUTES } from '../../routes/route'

const BlogCard = ({ post, navigation }) =>
    <View style={styles.card}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.content}>
            {post.body}
        </Text>
        <View style={styles.actions}>
            <Button title='+ detalhes' onPress={() => navigation.navigate(ROUTES.BlogDetails, { postId: post.id })} />
        </View>
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
    },
    actions: {
        alignItems: "flex-end",
        marginTop: 10
    }
})

export default withNavigation(BlogCard)