import React, { useState } from 'react'
import { View, Text } from 'react-native'
import BlogList from './BlogList'

const Blog = () =>

    <View>
        <BlogList />
    </View>

Blog.navigationOptions = () => ({
    title: 'Blog'
})

export default Blog