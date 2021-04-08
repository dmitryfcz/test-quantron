import React from 'react'
import styled from 'styled-components'

const ButtonBar = styled.div`
    background-color: #feebef;
    height: 70px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
`
const Button = styled.button`
    height: 40px;
    border: none;
    outline: none;
    border-radius: 8px;
    background-color: #fff;
    color: #333;
    font-size: 16px;
    font-weight: bold;
    width: 100%;
    max-width: 1200px;
    padding-left: 25px;
    box-sizing: border-box;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.7;
    }
`

const ReverseButton = ({reversePosts, sortByDesc}) => {
    return <ButtonBar>
        <Button onClick={reversePosts}>
            {sortByDesc ? 'Show old ones first' : 'Show new ones first'}
        </Button>
    </ButtonBar>
}

export default ReverseButton