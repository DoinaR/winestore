import React, { useState, useEffect } from 'react'
import { DisplayOccasions } from './DisplayFlavours'
import styled from 'styled-components'

const Occasions = ({ pairing, occasions }) => {
  const [position, setPosition] = useState({
    x: '',
    y: '',
  })

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    })
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return (
    <Wrapper>
      <div>
        <div className='show-iconText'>
          <div className='aroma-list'>
            <ul>
              <li>
                <DisplayOccasions pairing={pairing} /> {pairing}
              </li>
              <li>
                <DisplayOccasions occasions={occasions} />
                {occasions}
              </li>
            </ul>
          </div>
          <div
            className='cursor'
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
              background: 'yellow',
            }}
          ></div>
        </div>

        <p className='icon-text'>Pairing & Ocazii</p>
        <DisplayOccasions pairing={pairing} occasions={occasions} />
      </div>
    </Wrapper>
  )
}

export default Occasions

export const Wrapper = styled.div`
.display-icons{
} &:hover{ 
opacity: 1; 
}
 
  .aroma-list{ 
 position: absolute;
 top:0px;
 left:0px;
 width:170px;
 height:80px;
 padding-left: 50px;
 padding-top:10px;
 opacity:0;
 top:-40px;
 left:-40px;
 &:hover{   
   opacity: 1; 
   transition: all 0.5s ease-in-out;
}

ul{
    display:flex;
    flex-direction:column;
    justify-content: left;
    margin-left:55px;
    margin-bottom:10px;
    padding:4px;
    color:#5a5a4f;
    font-size: .8rem;
    background:#e8e8e4;
    width:120px;
    height:150px;
}
li{
    display:flex;
    align-items:center;
    justify-content: left;
   text-align: center;
    margin:7px;
    padding-right:10px;
    border-bottom: 1px solid #d0d0c8; 
    
}
`
