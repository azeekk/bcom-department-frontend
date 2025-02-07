import React from 'react'
import './programs.css'
import IGEN from '../../assets/igen232.mp4'

const Programs = () => {
  return (
    <div className='programs'>
      <h1 className='programheader'>PROGRAMS</h1>
      <div className='section'>
        <div className='top'>
                  <div className='video1'>
                    <video src={IGEN} width="500" height="200" autoPlay muted loop controls="false" ></video>
                  </div>

        </div>
        <div className='bottom'>
        <p className='program_paragraph'>The B.Com (Bachelor of Commerce) Department is a core academic unit in universities and colleges that focuses on commerce, finance, business management, and economics. It provides students with a strong foundation in business principles, financial accounting, taxation, and entrepreneurship.</p>
          
        </div>
      </div>    
    </div>
  )
}

export default Programs
