import { FC } from 'react';
import { Container } from './styled';
import { Text } from 'react-native';

export const CurrencyItem: FC = ({ item }) => {
  return (
    <Container>
      <Text>{item.symbol}</Text>
      <Text>{item.price}</Text>
    </Container>
  );
};
