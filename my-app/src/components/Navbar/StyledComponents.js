import styled from "styled-components";
import{ Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';


export const Nav= styled.nav`
 background-color:black;
 z-index: 15;
 position: fixed;
 height: 90px;
 width:100%;
 display: flex;
 flex-direction: row;
 justify-content:center;
 align-items:center;
 `;


export const Menulink = styled(Link)`
color: white;
cursor: pointer;
height: 100%;
display: flex;
text-decoration:none;
align-items: center;
`;


export const Up = styled(FaBars)`
display:none;
color:beige;
@media screen and (max-width: 680px){
    display:block;
    font-size: 28px;
    align-items: center;
    margin-left: 700px;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%,75%);

}
`;

export const Menu = styled.ul`
list-style-type: none;
margin:0;
padding:0;
overflow: hidden;
display: flex;


&>li {
    float : left;

    & > a {
        display:inline-block;
        color:white;
        text-align: center;
        padding: 2vh 5vw;
        text-decoration: none;
        font-size: 3vh;
        border-radius: 5vh;
        transition: 0,5s;
        

        &:hover {
            background-color: olive;
            color:black;

        }
    }

}

& > .dropdown{
    display: inline-block;


    & > .dropdown-content {
    display:none;
    position: absolute;
    background-color: black;
    min-width: 13vw;
    z-index: 1;

    & > a {

        color: white;
        padding: 2vw 5vw;
        text-decoration: none;
        display: block;
        text-align: center;
        &:hover {
            background-color: olive;
            border-radius: 5vh;

        }

    }
}


&:hover .dropdown-content{
    display:block;
    border-radius: 5vh;
    }
}

@media screen and (max-width: 1024px){
    display:none;
}
`;

export const NavName = styled.a`
cursor: pointer;
color: white;
text-decoration: none;
display: flex;
margin-left: 10px;
font-size: 4vh;
transition-duration: 0.4s;
position: absolute;
left: 2vh;
font-weight: 5vh;



&:hover{
    color:olive;
    font-size: 8vh;


}

`;


export const Basket = styled.a`
color: white;
font-size:5vh;
position: absolute;
padding: 4vh,5vw;
left: 87vw;
transition-duration: 0.4s;
z-index: 101;

&:hover{
    color:olive;
    font-size: 8vh;
}






`;