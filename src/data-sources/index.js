import gql from 'graphql-tag';

export const GET_ALL_ARTICLES = gql`
  {
    articles(t: Article) {
      id
      title
      url
      img {
        url
        title
        author
      }
      body(t: HTML) {
        data
      }
    }
  }
`;

export const GET_SINGLE_ARTICLE = gql`
  query getSingleArticle($url: String!) {
    article(url: $url) {
      title
      body(t: HTML) {
        data
      }
      img {
        url
        author
        title
      }
    }
  }
`;
