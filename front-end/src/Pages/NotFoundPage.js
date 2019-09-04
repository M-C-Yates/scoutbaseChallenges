import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NotFoundPage = () => (
  <StyledMain>404 page not found.</StyledMain>
)

export default NotFoundPage;