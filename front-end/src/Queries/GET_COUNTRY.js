import gql from 'graphql-tag';

export const GET_COUNTRY = gql`
  query Country(
    $code: String!
  ) {
    country(code: $code) {
      name
      currency
      phone
      continent {
        name
      }
    }
  }
`

export default GET_COUNTRY;