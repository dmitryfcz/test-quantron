import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { postsApi } from '../api/api'
import Loader from './Loader'
import Post from './Post'
import ReverseButton from './ReverseButton'
import * as _ from 'lodash'

const PostWrapper = styled.div`
    padding: 0 15px;
`

const Posts = () => {
    const [posts, setPosts] = useState(null)
    const [filteredPosts, setFilteredPosts] = useState(null)
    const [sortByDesc, setSortByDesc] = useState(true)
    
    useEffect(() => {
        postsApi.getPosts()
            .then(response => setPosts(response.items))
    }, [])

    useEffect(() => {
        posts && setFilteredPosts(_.chain(posts)
            .sortBy('creation_date')
            .filter(post => post.is_answered && post.owner.reputation >= 50)
            .reverse()
            .value())
    }, [posts])

    const reversePosts = () => {
        setFilteredPosts(_.reverse([...filteredPosts]))
        setSortByDesc(!sortByDesc)
    }
    
    const isInitialized = filteredPosts

    if(isInitialized) {
        return (
            <>
                <ReverseButton reversePosts={reversePosts} sortByDesc={sortByDesc} />
                <PostWrapper>
                        {filteredPosts.map(post => <Post
                                            key={post.question_id} 
                                            link={post.link}
                                            title={_.unescape(post.title)}
                                            userpic={post.owner.profile_image}
                        />)}
                </PostWrapper>
            </>
        )
    } else {
        return <Loader />
    }
}

export default Posts