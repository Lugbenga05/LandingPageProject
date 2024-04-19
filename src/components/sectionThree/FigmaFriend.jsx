import React from 'react'
import './figmaFriend.css'

const FigmaFriend = () => {
  return (
    <>
        <div className='FFbackground'>
            <section className='FFheader-wrap'>
                <div className='FFheader' >
                    <div className='avatarFiggy-wrap'>
                        <img id='avatarIcon' src="./src/assets/avatar.png" alt="avatar" />
                        <h4 id='figgyText'>Figgy</h4>
                    </div>

                    <div className='contactInput-wrap'>
                        <div className='pinContact-wrap'>
                            <img id='pinContact-icon' src="./src/assets/pinIcon.png" alt="pinIcon" />
                            <img id='pinContact-icon' src="./src/assets/contactIcon.png" alt="contactIcon" />
                        </div>

                        <div className='input-wrap'>
                            <input id='searchInput' type="text" placeholder='Search' icon='Icon/Search' showIcon='true' />
                            <button id='searchButton'><img src="./src/assets/searchIcon.png" alt="searchIcon" /></button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='dateBackground'>
                <div className='date-wrap'>
                    <div className='horizontalLine'></div> <h6 id='dateText'>November 18, 2022</h6> <div className='horizontalLine'></div>
                    
                </div>

            </section>

            <section className='promptBackground'>
                <div className='prompt-wrap'>
                    <div className='textContent-wrap'>
                        <div className='welcome-wrap'>
                            <img id='figgyImage' src="./src/assets/figgy.png" alt="figgy" />

                            <div className='figgy-wrap'>
                                <div id='figgyLine'>
                                <span id='figgyTitle'>Figgy </span><sup id='bot'>BOT</sup>
                                <span id='figgyDate'>  11/18/2022</span>   
                                <span id='figgyTime'>  1:03 PM</span>
                                </div>

                                <div id='figmalogo-text'>
                                    <span id='ffText-one'>Welcome to</span>
                                    <span id='ffText-two'> Friends of Figma </span>
                                    <img id='figmaLogo' src="./src/assets/figmaLogo.png" alt="figmalogo" />
                                </div>
                            </div>
                        </div>

                        <div className='welcome-wrapTwo'>
                            <div className='contentOne'>
                                <div className='contentOne-text'>
                                    <span id='makeSure'>Make sure to read the  </span>
                                    <span id='ffRules'><img id='love' src="./src/assets/love.png" alt="love" /><img id='lock' src="./src/assets/lock.png" alt="lock" /> Friends of Figma ≻ #rules</span>
                                    <span id='thenClick'>, and then click the link at the bottom of the ⁠</span>
                                    <span className='noAccess'><img id='lock' src="./src/assets/lock.png" alt="lock" />No access</span>
                                    <span id='getAccess'> channel to get access to more of the</span>
                                </div>

                                <div id='server'>server. </div>
                            </div>

                            <div className='contentTwo'>
                                <div className='contentTwo-textOne'>
                                    <span id='recommend'>We recommend starting by introducing yourself </span>
                                    <span id='ffIntro'><img id='love' src="./src/assets/love.png" alt="love" /><img id='lock' src="./src/assets/lock.png" alt="lock" /> Friends of Figma ≻ #introductions</span>
                                    <span id='conversation'>and joining the conversation over in </span>
                                    <span className='noAccess'><img id='lock' src="./src/assets/lock.png" alt="lock" />No access</span>
                                    <span id='youCan'>. You can also </span>
                                </div>

                                <div className='contentTwo-textTwo'>
                                    <span id='designSystem'>get access to interest channels, such as Design Systems and Art & Illustration by going to the</span>
                                    <span id='ffInterest'><img id='love' src="./src/assets/love.png" alt="love" /><img id='lock' src="./src/assets/lock.png" alt="lock" />Friends of Figma ≻ #interest-roles</span>
                                    <span id='channel'> channel. </span>
                                </div>
                            </div>

                            <div className='contentThree'>
                                <div className='contentThree-text'>
                                    <span id='deletedRole'>If you have any questions don't hesitate to reach out to a @deleted-role. They can be reached at any time :)</span>
                                </div>

                            </div>
                        </div>

                        <div className='messageContent-wrap'>
                            <img id='mcImage' src="./src/assets/messageContentImage.png" alt="mcImage" />

                            <div className='mcText-wrap'>
                                <h6 id='mcText'>Sent from server: Friends of Figma</h6>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className='messageFiggyBcg'>
                <div className='messageFiggy-wrap'>
                    <div className='mfAddicon-wrap'>
                        <img id='addIcon' src="./src/assets/addIcon.png" alt="addIcon" />

                        <div id='mfText'><span>Message @Figgy</span></div>
                    </div>

                    <div className='smileyOthersicon-wrap'>
                        <img className='messageIcon' src="./src/assets/gifIcon.png" alt="gifIcon" />

                        <img className='messageIcon' src="./src/assets/folderIcon.png" alt="folderIcon" />

                        <img className='messageIcon' src="./src/assets/smileyIcon.png" alt="smileyIcon" />
                    </div>

                </div>

            </section>

        </div>

    </>
  )
}

export default FigmaFriend
