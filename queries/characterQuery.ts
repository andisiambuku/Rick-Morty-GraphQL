import { gql } from "@apollo/client";

export const characterQuery = gql`
  query {
    characters {
      results {
        name
        status
        species
        image
        origin {
          name
        }
        location {
          name
        }
      }
    }
  }
`;