import React from 'react'
import styled from 'styled-components'

const StyledPost = styled.a`
    display: flex;
    align-items: center;
    background: #ffffff;
    border-radius: 8px;
    padding: 0 15px;
    width: 100%;
    max-width: 1200px;
    min-height: 40px;
    margin: 0 auto 20px;
    box-sizing: border-box;
    color: #000;
    text-decoration: none;
    &:hover {
        color: #346eb8;
    }
`
const PostTitle = styled.p`
    margin: 0;
    margin-left: 15px;
    &::first-letter {
        text-transform: uppercase;
    }
    @media (min-width: 481px) {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 40px;
    }
    @media (max-width: 480px) {
        line-height: 1.5em;
        padding: 10px 0;
        font-size: 14px;
    }
`
const UserPic = styled.img`
    width: 30px;
    height: 30px;
`

const Post = ({link, title, userpic}) => {
    return <StyledPost href={link} target='_blank' rel='noopener noreferrer'>
        <UserPic src={userpic} />
        <PostTitle title={title}>
            {title}
        </PostTitle>
    </StyledPost>
}

export default Post