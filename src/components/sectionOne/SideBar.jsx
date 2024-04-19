import React from 'react'
import './sideBar.css'

const SideBar = () => {
    return (
        <>
            <div className='sidebar-bcg'>

                <div className='sidebar-frame'>
                    <div className='sidebariconBox'>
                        <div className='sidebarIcon-figgy'>
                            <div id='rectangle'></div> <img className='sideBar-icon' src="./src/assets/figgylogo.png" alt="" />
                        </div>
                    </div>

                    <div id='border'></div>

                    <div className='sidebariconBox-two'>
                        <div className='sidebarIcon-loveIcon'>
                            <div id='indicator'></div><img className='sideBarIcon-two' src="./src/assets/loveIcon.png" alt="" />
                        </div>

                        <div className='sidebarIcon-wrap'>
                            <img className='sideBarIcon-image' id='sidebarIconAction' src="./src/assets/sidebarIconAction.png" alt="" />
                        </div>

                        <div className='sidebarIcon-wrap'>
                            <img className='sideBarIcon-image' src="./src/assets/locationIcon.png" alt="" />
                        </div>

                    </div>

                </div>


            </div>

        </>
    )
}

export default SideBar
