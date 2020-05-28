import React from 'react';
import { Spinner } from 'react-bootstrap';

import * as S from './styles';

const Loading = () => (
  <S.Box>
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </S.Box>
);

export default Loading;
