import React, { ReactElement } from 'react';
import { Logo } from 'components/atoms';
import * as S from './LogoGroup.styled';

const LogoGroup = (): ReactElement => (
  <S.Wrapper>
    <S.HambugerBtn />
    <Logo />
  </S.Wrapper>
);

export default LogoGroup;
