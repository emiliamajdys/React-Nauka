
import React from 'react'
import { SearchBtn, SearchE, StartBackground, StartContainer, StartContent, StartVideo } from './StyledComponents';
import { videoBackground } from '../../assets/silkafilm.mp4';



function Home(){
    return(
        <>
            <StartContainer>
                <StartBackground>
            </StartBackground>
            </StartContainer>
            <StartContent>
                <SearchE />
          <SearchBtn>Find</SearchBtn>
            </StartContent>
        </>
    )
}
export default Home;