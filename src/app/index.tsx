import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { FlashList } from '@shopify/flash-list';
import { useTranslation } from 'react-i18next';

type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding-top: 40px;
`;

const Item = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  border-bottom-width: 0.5px;
  border-bottom-color: #ccc;
`;

const CoinImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 12px;
`;

const CoinInfo = styled.View``;

const CoinName = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #222;
`;

const CoinPrice = styled.Text`
  font-size: 14px;
  color: #555;
  margin-top: 2px;
`;

export const App = () => {
  const [t] = useTranslation();

  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
    )
      .then(res => res.json())
      .then(data => {
        setCoins(data);
      })
      .catch(e => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({ item }: { item: Coin }) => (
    <Item>
      <CoinImage source={{ uri: item.image }} />
      <CoinInfo>
        <CoinName>
          {item.name} ({item.symbol.toUpperCase()})
        </CoinName>
        <CoinPrice>${item.current_price.toFixed(2)}</CoinPrice>
      </CoinInfo>
    </Item>
  );

  return (
    <Container>
      {loading ? (
        <CoinName>Загрузка...</CoinName>
      ) : (
        <FlashList
          data={coins}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          estimatedItemSize={70}
        />
      )}
    </Container>
  );
};
