import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { context } from '../../context/context'
const Main = () => {
    const {onSent, recentPrompt,showResult, loading, resultData,setInput, input} = useContext(context)
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            {!showResult?
                <>
                    <div className="greet">
                        <p><span>Hello, Afomia.</span></p>
                        <p>How can I helo you today?</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>Suggest beautiful place to see on an upcomming road trip</p>
                            <img src={assets.compass_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Briefly summarize this concept: urban planning</p>
                            <img src={assets.bulb_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Brainstorm team bonding activities for our work retreat</p>
                            <img src={assets.message_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Improve readavility of the following code</p>
                            <img src={assets.code_icon} alt="" />
                        </div>
                    </div>
                </>
                :<div  className='result'>

                </div>

            }
            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=> setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may dispaly inacccurate or incomplete information. Always refer to a professional before making any decisions.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main
