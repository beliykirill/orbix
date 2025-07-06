import styled, { css } from 'styled-components/native';
import { color } from '@shared/lib/themes';

export const smallTextStyle = css`
  font-family: Gilroy-Medium;
  font-size: 14px;
  line-height: 16px;
  color: ${color('textSecondary')};
`;

export const SmallText = styled.Text`
  ${smallTextStyle};
`;
