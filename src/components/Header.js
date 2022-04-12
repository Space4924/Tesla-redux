import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import carSlice, {selectCars} from "../features/car/carSlice";
import { useSelector } from 'react-redux'
function Header() {
    const [nav, setnav] = useState(false) ;
    const cars = useSelector(selectCars)
        return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {cars && cars.map((car, index)=>(
                    <a href='#'>{car}</a>      
                ))} 
            </Menu>
            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Account</a>
            </RightMenu>
            <CustomMenu onClick={()=>setnav(true)}/>
            <BurgerNav show= {nav}>
                <Box4xclose >
                    <Close onClick={()=> setnav(false)}/>
                </Box4xclose>
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Trade-in</a></li>
                <li><a href='#'>Test Drive</a></li>
                <li><a href='#'>Roadster</a></li>
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Existing Inventory</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container= styled.div`
    position : fixed;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    right: 0;
    left: 0;
    top: 0;
    z-index: 1;
`
const Menu= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 ;

    a{
        font-weight: 500;
        padding: 0 30px;

    
    @media (max-width: 800px){
        display: none;
    }   
`
const RightMenu = styled.div`

    display: flex;
    align-items: center;
    a{
        font-weight: 500;
        margin-right: 10px;     

    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
    color:white;
`
const BurgerNav = styled.div`
    background-color: white;
    top:0;
    bottom: 0;
    right: 0;
    width: 300px;
    position: fixed;
    z-index: 2;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    li{
        padding 25px 0;

        a{
            font-weight: 400;
        }
    }
    transform: ${ props=> props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.2s ease-in;
`
const Close= styled(CloseIcon)`
    cursor: pointer;
    
`
const Box4xclose = styled.div`
    display: flex;
    justify-content: flex-end;
    
`