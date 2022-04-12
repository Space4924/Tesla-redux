import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title = "Model S"
                secheading= "Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                lbutton= "CUTOM ORDER"
                rbutton= "EXISTING INVENTORY"
            />
            <Section
                title= "Model Y"
                secheading= "Order Online for Touchless Delivery"
                backgroundImg= "model-y.jpg"
                lbutton= "CUTOM ORDER"
                rbutton= "EXISTING INVENTORY"
            />
            <Section
                title ="Model 3"
                secheading= "Order Online for Touchless Delivery"
                backgroundImg= "model-3.jpg"
                lbutton= "CUTOM ORDER"
                rbutton= "EXISTING INVENTORY"
            />
            <Section
                title = "Model X"
                secheading= "Order Online for Touchless Delivery"
                backgroundImg = "model-x.jpg"
                lbutton= "CUTOM ORDER"
                rbutton= "EXISTING INVENTORY"
            />
            <Section
                title = " Solar Panels"
                secheading= "Low Cost Solar Panels in America"
                backgroundImg= "solar-panel.jpg"
                lbutton = "ORDER NOW"
                rbutton= "LEARN MORE"
            />
            <Section
                title= "Solar Roof"
                secheading= "Produce Clean Energy Fron Your Roof"
                backgroundImg= "solar-roof.jpg"
                lbutton = "ORDER NOW"
                rbutton= "LEARN MORE"
            />
            <Section
                title = "Accessories"
                backgroundImg="accessories.jpg"
                lbutton= "SHOP NOW"
            />
                </Container>
    )
}

export default Home

const Container= styled.div`
    height:100vh ;
`
