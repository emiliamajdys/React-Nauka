import React from "react";
import{
    SidebarContainer,
    SidebarWrapper,
    SidebarLink,
    SidebarMenu,
    Icon,
    CloseIcon,
} from './StyledElements';



const Sidebar = () =>{
    return(
        <>
    <SidebarContainer isOpen={isopen}>
        <Icon onClick={toggle}>
            <CloseIcon/>

        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
            <SidebarLink
                to="Sprzet"
                onClick={toggle}
                >
            </SidebarLink>
            <SidebarLink
                to="Suplementy"
                onClick={toggle}
                >
             </SidebarLink>
             <SidebarLink
             to="Ubrania"
             onClick={toggle}
             ></SidebarLink>
            </SidebarMenu>
         </SidebarWrapper>
     </SidebarContainer> 

    </>
    )
};
export default Sidebar;