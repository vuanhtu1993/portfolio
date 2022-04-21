import React from "react";
import style from './home.module.scss'
import styled from 'styled-components'

const Avatar = styled.div`
    background: red;
    height: 100px;
`

const Home = () => {
    return (
        <div className={style.container}>
            Vu anh tus
            <Avatar/>
        </div>
    )
}

export default Home