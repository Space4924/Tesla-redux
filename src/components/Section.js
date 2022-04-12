import React from 'react'
import styled, { keyframes } from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({backgroundImg, title, secheading, lbutton, rbutton}) {
    return (
        
        <Wrap bgImg={backgroundImg}>
            <Fade bottom>
                <Itemtext>
                    <h1>{title}</h1>
                    <p>{secheading}</p>
                </Itemtext>
            </Fade>
            <Buttons>
                <ButtonGroup>
                    <Fade left>
                        <LeftButton>
                            {lbutton}
                        </LeftButton>
                    </Fade>
                    <Fade right>
                    { rbutton &&
                            <RightButton>
                                {rbutton}
                            </RightButton>
                    } 
                    </Fade>  
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg"/>
            </Buttons> 
        </Wrap>
    )
}

export default Section
const Wrap = styled.div`
    width: 100vw;
    height: 100vh; 
    background-size:cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${ props=> `url("/images/${props.bgImg}")`}
`
const Itemtext= styled.div`
    padding-top: 15vh;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    font-size: 12px;
    cursor: pointer;
    margin:8px;
`
const RightButton= styled(LeftButton)`
background-color: white;
color: rgba(23,26,32,0.8);
opacity:0.65;

`
const DownArrow =styled.img`
margin-top: 10px;
height: 40px;
animation: hop infinite 0.7s;
overflow-x: hidden;
`
const Buttons= styled.div`
    
`
