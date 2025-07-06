import React, { FC } from 'react';
import { TFunction } from 'i18next';
import { ICoin } from '@shared/types/common';
import { MainText, SmallText } from '@shared/ui';
import {
  ChangePercent,
  CoinImage,
  Container,
  ImageWrapper,
  TextContainer,
} from './styled';

interface Props {
  t: TFunction;
  item: ICoin;
}

export const CurrencyItem: FC<Props> = ({ t, item }) => {
  const {
    image,
    symbol,
    current_price: currentPrice,
    name,
    price_change_percentage_24h: priceChangePercentage24h,
  } = item;

  const isStableCoin = Math.abs(priceChangePercentage24h) < 0.01;
  const isPriceChangePositive = priceChangePercentage24h >= 0;

  return (
    <Container>
      <ImageWrapper>
        <CoinImage source={{ uri: image }} />
      </ImageWrapper>
      <TextContainer>
        <MainText numberOfLines={1}>
          {t('coin_name', { name, symbol: symbol.toUpperCase() })}
        </MainText>
        <SmallText>
          {t('currency_with_value', { count: currentPrice.toFixed(2) })}
        </SmallText>
      </TextContainer>
      {!isStableCoin && (
        <ChangePercent isPriceChangePositive={isPriceChangePositive}>
          {t('price_change', {
            context: isPriceChangePositive ? 'increased' : 'decreased',
            count: Math.abs(item.price_change_percentage_24h).toFixed(2),
          })}
        </ChangePercent>
      )}
    </Container>
  );
};
