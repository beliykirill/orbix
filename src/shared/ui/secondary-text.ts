import styled, { css } from 'styled-components/native';
import { color } from '@shared/lib/themes';

export const secondaryTextStyle = css`
  font-family: Gilroy-Regular;
  font-size: 16px;
  line-height: 20px;
  color: ${color('textMain')};
`;

export const SecondaryText = styled.Text`
  ${secondaryTextStyle};
`;
