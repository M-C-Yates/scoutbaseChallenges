import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HomePage = () => {

  return (
    <StyledMain>
    <h1>Countries Api</h1>
    <p>https://github.com/M-C-Yates</p>
    </StyledMain>
  )
}

export default HomePage;