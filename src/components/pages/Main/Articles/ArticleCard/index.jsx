import React from 'react';
import { Card, Button, Container, Col, Row } from 'react-bootstrap';
import * as S from './styles';

const ArticleCard = ({ title, url, img }) => {
  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Card className="mb-5">
            <S.ArticleCardButton to={`article/${btoa(url)}`}>
              <Card.Img
                variant="top"
                src={`${img.url}`}
                alt={img.title ? img.title : 'Article Image'}
              />
            </S.ArticleCardButton>
            <Card.Body>
              <Card.Text className="mb-3">{title}</Card.Text>
              <Button variant="primary">
                <S.ArticleCardButton to={`article/${btoa(url)}`}>
                  Czytaj Więcej
                </S.ArticleCardButton>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleCard;
