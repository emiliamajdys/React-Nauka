import styled from 'styled-components';


export const CheckoutContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    align-content: center;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 2vw;
    background-color: white;
`;

export const ChValue = styled.h3`
    font-size: 4vh;
    position: relative;
`;

export const ChButton = styled.button`
    font-size: 3vh;
    padding: 2vh 2vh;
    border: 2px solid black;
    position: relative;
    cursor: pointer;
    border-radius: 1rem;
`;