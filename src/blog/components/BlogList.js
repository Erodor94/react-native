import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import BlogCard from './BlogCard'
import { blogService } from '../services/BlogServices'
import { FlatList } from 'react-native-gesture-handler'

const BlogList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        blogService.getPosts().then(response => {
            setPosts(response.data)
        })
    }, [])

    const renderBlogCard = ({ item }) => {
        return <BlogCard post={item} />
    }
    return <View style={styles.list}>
        <FlatList data={posts}
            keyExtractor={item => item.id.toString()}
            renderItem={renderBlogCard} />



    </View>
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: 'lightgray',
    }
})

export default BlogList