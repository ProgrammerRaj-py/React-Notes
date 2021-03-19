import React from 'react'
import '../scss/MainContainer.scss'

import SideContainer from './SideContainer'
import TextContainer from './TextContainer'


const MainContainer = () => {
    return (
        <section className="main">
            <SideContainer />
            <TextContainer />
        </section>
    );
}
export default MainContainer