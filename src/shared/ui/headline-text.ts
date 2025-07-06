import styled, { css } from 'styled-components/native';
import { color } from '@shared/lib/themes';

export const headlineTextStyle = css`
  font-family: SFProText-Bold;
  font-size: 28px;
  line-height: 30px;
  text-align: center;
  color: ${color('textMain')};
`;

export const HeadlineText = styled.Text`
  ${headlineTextStyle};
`;
