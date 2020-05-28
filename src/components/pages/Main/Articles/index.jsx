import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_ARTICLES } from 'data-sources';
import Loading from 'components/common/Loading';
import ArticleCard from './ArticleCard';
import * as S from './styles';

const Articles = () => {
  const { loading, data, error } = useQuery(GET_ALL_ARTICLES);

  return (
    <S.ArticlesWrapper>
      {loading && <Loading />}
      {error && <p>{error.message}</p>}
      {data &&
        data.articles.map((item) => (
          <ArticleCard
            key={item.id}
            url={item.url}
            title={item.title}
            img={item.img}
          />
        ))}
    </S.ArticlesWrapper>
  );
};

export default Articles;
