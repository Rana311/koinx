import React from 'react'
import '../App.css';

import Box1 from './Box1';
import Box2 from './Box2';
import Box3 from './Box3';
import Box4 from './Box4';
import Box5 from './Box5';
import Box6 from './Box6';

import RightBox1 from './RightBox1';
import RightBox2 from './RightBox2';


export default function MainContainer() {
  return (
      <div className="main-container">
      <div className="left-container">
        <Box1 />
        <Box2 />
        <Box3 />
        <Box4 />
        <Box5 />
        <Box6 />
      </div>
      <div className="right-container">
        <RightBox1 />
        <RightBox2 />
      </div>
    </div>
  )
}
