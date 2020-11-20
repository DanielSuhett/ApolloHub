import { gql } from '@apollo/client';

const repoSearch = gql`query ($value: String!) {
  search(query: $value, type: REPOSITORY, first: 50, ) {
    repositoryCount
    edges {
      node {
        ... on Repository {
          name,
          description,
          createdAt
        }
      }
    }
  }

}`

export {
  repoSearch
}