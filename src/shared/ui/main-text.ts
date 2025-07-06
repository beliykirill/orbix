import styled, { css } from 'styled-components/native';
import { color } from '@shared/lib/themes';

export const mainTextStyle = css`
  font-family: Gilroy-Medium;
  font-size: 16px;
  line-height: 22px;
  color: ${color('textMain')};
`;

export const MainText = styled.Text`
  ${mainTextStyle};
`;
