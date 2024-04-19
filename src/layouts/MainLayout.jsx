import React from 'react'
import './mainLayout.css'
import SideBar from '../components/sectionOne/SideBar'
import DirectMessage from '../components/sectionTwo/DirectMessage'
import FigmaFriend from '../components/sectionThree/FigmaFriend'

const MainLayout = () => {
  return (
    <div className='layoutParent'>
        <div className='layoutBackground'>
            <SideBar/>
            <DirectMessage/>
            <FigmaFriend/>
        </div>
        
    </div>
  )
}

export default MainLayout
