import styled from "styled-components";


export const SidebarContainer = styled.aside`
position: fixed;
z-index: 100;
width: 100%;
height: 100%;
background: black;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.7s ease-in-out ;
opacity: ${({isOpen})=> (isOpen? '100%': '0%')};
top: ${({isOpen})=> (isOpen ? '-0': '-100%')};

`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10vh;
    text-align: center;

    @media screen and(max-width: 1100px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 20vw);
    }
`;

export const SidebarLink = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    font-size: 5vh;
    max-width: 30vw;
    overflow-x: visible;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: darkgray;
    cursor: pointer;

    &:hover {
        color: darksalmon;
    }

    @media screen and (max-width: 1100px) {
        max-width: 90vw;

        :hover {
            color: darksalmon;
        }
    }
`;

export const CloseIcon = styled(FaTimes)`
    color: white;
    background: transparent;
`;

export const Icon = styled.div`
    position: absolute;
    top: 13vh;
    right: 2.5vw;
    background: transparent;
    font-size: 4vh;
    cursor: pointer;
    outline: none;
`;