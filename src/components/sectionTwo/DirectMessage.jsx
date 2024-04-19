import {useState} from 'react'
import './directMessage.css'
import ChatRow from '../../chatRow/ChatRow'

const DirectMessage = () => {
    const chatData = [
        {
            chatAvatar: "./src/assets/lazarAvatar.png",
            chatName: "Lazar Nikolov"
        },

        {
            chatAvatar: "./src/assets/figgyAvatar.png",
            chatName: "Figgy"
        },

        {
            chatAvatar: "./src/assets/ivyAvatar.png",
            chatName: "Ivy"
        },

        {
            chatAvatar: "./src/assets/luckyAvatar.png",
            chatName: "Lucky"
        }
    ]


  return (
    <>
        <div className='DMbackground'>
            <section className='startConversation-wrap'>
                <input id='startConversation-input' type="text" placeholder='Find or start a conversation' />

            </section>

            <section className='frame41'>
                <div className='friendNitroDM-wrap'>
                    <div className='friendNitro-wrap'>
                        <div className='friendBcg'>
                            <div className='friendWrap'>
                                <img id='friendsIcon' src="./src/assets/friendsIcon.png" alt="friendsIcon" />
                                <h6 id='friendsText'>Friends</h6>
                            </div>
                        </div>

                        <div className='nitroBcg'>
                                <div className='nitroWrap'>
                                    <img id='nitroIcon' src="./src/assets/nitroIcon.png" alt="nitroIcon" />
                                    <h6 id='nitroText'>Nitro</h6>
                                </div>

                                <img id='newIcon' src="./src/assets/newIcon.png" alt="newIcon" />
                        </div>
                    </div>

                    <div className='DM-bcg'>
                        <div className='DM-wrap'>
                            <h6 id='DMtext'>DIRECT MESSAGES</h6>
                        </div>
                        <img id='vectorIcon' src="./src/assets/vectorIcon.png" alt="vectorIcon" />
                    </div>

                </div>

                <div className='chatBcg'>
                    {
                        chatData.map(
                            (result)=>{
                                return(
                                    <ChatRow chatAvatar={result.chatAvatar} chatName={result.chatName}/>

                                )
                            }
                        )
                    }

                </div>
            </section>

            


        </div>
      
    </>
  )
}

export default DirectMessage
