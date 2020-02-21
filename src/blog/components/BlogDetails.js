import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import BlogComments from './BlogComments'
import { ScrollView } from 'react-native-gesture-handler'
import { blogService } from '../services/BlogServices'

const BlogDetails = ( { navigation }) => {
    const [title, setTitle] = useState('')
    const [content, setDescription] = useState('')
    const [comments, setComments] = useState([])

    const fetchPostDetails = async () => {
        const detailsResponse = await blogService.getPostDetail(navigation.state.params.postId)
        setTitle(detailsResponse.data.title)
        setDescription(detailsResponse.data.body)
    }

    useEffect(() => {
        fetchPostDetails()
    })

    return <ScrollView>
        <View style={styles.details}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>
                {content}
            </Text>
            <BlogComments postId={navigation.state.params.postId}/>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    details: {
        padding: 10
    },
    title: {
        fontSize: 36,
        fontWeight: "bold"
    },
    content: {
        paddingBottom: 20,
        marginBottom: 2,
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderBottomColor: "black"
    }
})

export default BlogDetails