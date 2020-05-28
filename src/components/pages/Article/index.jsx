import React, { useMemo } from 'react';
import { Card } from 'react-bootstrap';
import { useQuery } from 'react-apollo';
import { GET_SINGLE_ARTICLE } from 'data-sources';
import { convertNewsBodyToHTML } from 'utils/news';
import Loading from 'components/common/Loading';

const Article = (props) => {
  const { data: { article } = {} } = useQuery(GET_SINGLE_ARTICLE, {
    variables: { url: atob(props.match.params.id) },
  });

  const htmlContents = useMemo(
    () => ({ __html: convertNewsBodyToHTML(article.body) }),
    [article]
  );

  return (
    <>
      {article ? (
        <div>
          <Card.Img
            variant="top"
            src={`${article.img.url}`}
            alt={article.img.title ? article.img.title : 'Article Image'}
            style={{ maxHeight: '40vh', objectFit: 'cover' }}
          />
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text dangerouslySetInnerHTML={htmlContents} />
            <footer className="blockquote-footer">
              <cite title="Source Title">{article.img.author}</cite>
            </footer>
          </Card.Body>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Article;
