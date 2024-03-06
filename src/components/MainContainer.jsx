import React from 'react'
import '../App.css';
import Frame from '../images/Frame.png'

export default function MainContainer() {
  return (
      <div className="main-container">
      <div className="left-container">
        {/* Content for the left container */}
      </div>
      <div className="right-container">
        <div className='top-blue-container'>
            <h3>
                Get Started with KoinX 
                <br/>for FREE
            </h3>
            <p>
                With our range of features that you can equip for free,
                KoinX allows you to be more educated and aware of your tax reports.
            </p>
            <img src= {Frame} />
            <div className='get-start-button'>
            <button className='btn btn-light '>Get Started for FREE &rarr;</button>
            </div>
            
        </div>
      </div>
    </div>
  )
}
