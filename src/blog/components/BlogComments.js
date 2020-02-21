import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import BlogCommentCard from './BlogCommentCard'
import { blogService } from '../services/BlogServices'
import { FlatList } from 'react-native-gesture-handler'

class BlogComments extends React.Component {
    state = {
        comments: []
    }

    componentDidMount() {
        this.fetchCommentsByPost()
    }

    fetchCommentsByPost = async () => {
        const response = await blogService.getComments(this.props.postId)
        console.log(response.data)

        this.setState({
            comments: response.data
        })
    }

    render() {
        return (
            <View style={StyleSheet.list}>
                <Text style={StyleSheet.title}>Comentários</Text>
                <View>
                    <FlatList data={this.state.comments}
                        keyExtractor={item => item.id.toString()}
                        renderItem={obj => {
                            const { item } = obj
                            return <BlogCommentCard comment={item} />
                        }} />
                </View>
            </View>)
    }
}

const styles = StyleSheet.create({
    comments: {},
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10
    }
})

export default BlogComments