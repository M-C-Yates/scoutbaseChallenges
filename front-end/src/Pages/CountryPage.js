import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

import GET_COUNTRY from '../Queries/GET_COUNTRY';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 95vh;
  max-height: 100%;


  border-radius: var(--br);
  
  background-color: var(--bg-white);

  background-image: url('https://source.unsplash.com/featured/weekly?${props => props.country}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  `

const StyledCard = styled.li`
display: flex;
flex-direction: column;
justify-content: space-between;

padding: 2rem;
height: 80%;
max-height: 50rem;
width: 60%;
max-width: 40rem;

box-shadow: var(--boxshadow);
background-color: var(--bg-white);

border-radius: var(--br);

a {
  align-self: baseline;
  color: var(--bg-primary);
}
`


export const CountryPage = ({code}) => {
  console.log(code)
  const {loading, error, data} = useQuery(GET_COUNTRY, {
    variables: {code}
  })

  if (loading) return <StyledMain>'Loading...'</StyledMain>;
  if (error) return <StyledMain>`Error! ${error.message}`</StyledMain>;

  const {country} = data;

  

  return (
    <StyledMain country={country.name}>
    <StyledCard>
    <h2>{country.name}</h2>
    <h4>{country.continent.name}</h4>
    <p>Currency: <span>{country.currency}</span></p>
    <p>Area code: <span>{country.phone}</span></p>
    </StyledCard>
    </StyledMain>
  )
}

export default CountryPage;