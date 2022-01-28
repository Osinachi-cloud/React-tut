import React from 'react'
import Sidebar from './Sidebar'
import Mainbody from './Mainbody'
import './Main.css'

function Main() {
    return (
        <div className="main">
            <div className='sidebar'>
                 <Sidebar/>
            </div>
            <div className='mainbody'>
               <Mainbody/>
            </div>
          
          
        </div>
    )
}

export default Main
