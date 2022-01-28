import React from 'react'
import Menu from './Menu'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className='sidebar-comp'>


           <Menu text="home" icon="fa fa-user"/>
           <Menu text="about" icon="fa fa-suitcase"/>
           <Menu text="services" icon="fa fa-suitcase"/>
           <Menu text="home" icon="fa fa-phone"/>
           <Menu text="home" icon="fa fa-user"/>
           <Menu text="home" icon="fa fa-user"/>

        </div>
    )
}

export default Sidebar
