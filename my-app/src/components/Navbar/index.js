import { React } from "react";
import { Nav, Menulink, Basket, NavName, Up, Menu } from './StyledComponents';
import { SlBasket } from "react-icons/sl";
const Navbar = () => {



    return (
        <>
            <Nav>

                <NavName href='/'>KFD</NavName>
                <Menu>
                    <li className="dropdown">
                        <a href="sprzet" className="dropbtn">sprzet</a>
                        <div className="dropdown-content">
                            <a href="#">paski</a>
                            <a href="#">magnezja</a>
                            <a href="#">neopreny</a>
                            <a href="#">pasy</a>
                        </div>
                    </li>
                    <li className="dropdown"><a href="suplementy" className="dropbtn">suplementy</a>
                        <div className="dropdown-content">
                            <a href="#">kreatyna</a>
                            <a href="#">białko</a>
                            <a href="#">pwr cytrulina</a>
                        </div>
                    </li>
                    <li className="dropdown">
                        <a href="ubrania" className="dropbtn">ubrania</a>
                        <div className="dropdown-content">
                            <a href="#">męskie</a>
                            <a href="#">damskie</a>
                            <a href="#">dziecięce</a>
                        </div>

                    </li>
                </Menu>
                <Basket href="/basket">
                    <SlBasket />
                </Basket>

            </Nav>

        </>
    )
}



export default Navbar;

