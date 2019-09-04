import React, {useEffect} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from '@reach/router';
import styled from 'styled-components';

import LanguageInfo from '../Components/LanguageInfo';
import GET_COUNTRIES from '../Queries/GET_COUNTRIES';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
`

const StyledCard = styled.li`
display: flex;
flex-direction: column;

max-width: 40rem;
padding: 2rem;
margin: 5rem 0;
box-shadow: var(--boxshadow);
background-color: var(--bg-white);

border-radius: var(--br);

a {
  align-self: baseline;
  color: var(--bg-primary);
}
`

export const CountriesPage = () => {

  const {loading, error, data, fetchMore} = useQuery(GET_COUNTRIES);

  if (loading) return <StyledMain>Loading...</StyledMain>
  if (error) return <StyledMain>Error: {error}</StyledMain>

  return (
    <StyledMain>
    <StyledUl>
    {data.countries.map((country) => {
      return <StyledCard key={country.name}>
      <h2>
      {country.name}
      </h2>
      <h4>{country.continent.name}</h4>
      <LanguageInfo languages={country.languages} />
      <Link to={`/countries/${country.code}`}>Details</Link>
      </StyledCard>
    })}
    </StyledUl>
    </StyledMain>
    )
}

export default CountriesPage;