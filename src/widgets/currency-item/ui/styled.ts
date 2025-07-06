import styled from 'styled-components/native';
import { color } from '@shared/lib/themes';
import FastImage from '@d11/react-native-fast-image';
import { SecondaryText } from '@shared/ui';
import { ifProp } from 'styled-tools';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 8px;
  border-radius: 8px;
  background: ${color('surfaceBackgroundSecondary')};
`;

export const ImageWrapper = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background-color: ${color('surfaceBackground')};
  align-items: center;
  justify-content: center;
`;

export const CoinImage = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 4px;
`;

export const TextContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ChangePercent = styled(SecondaryText)<{
  isPriceChangePositive: boolean;
}>`
  color: ${ifProp(
    'isPriceChangePositive',
    color('textPrice'),
    color('textError'),
  )};
`;
