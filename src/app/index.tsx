import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/native';
import { AxiosError } from 'axios';
import { FlashList } from '@shopify/flash-list';
import { color } from '@shared/lib/themes';
import { commonAPI } from '@shared/lib/api';
import { ICoin } from '@shared/types/common';
import { HeadlineText } from '@shared/ui';
import { CurrencyItem } from '@widgets/currency-item';

export const App = () => {
  const [t, i18n] = useTranslation();

  const [coins, setCoins] = useState<ICoin[]>([]);
  const [isLoaded, setLoaded] = useState(true);

  const onLoadCoins = async () => {
    try {
      const loadedCoins = await commonAPI.getCoinsList({
        vs_currency: i18n.language === 'ru' ? 'rub' : 'usd',
        order: 'market_cap_desc',
        per_page: 100,
        page: 1,
        sparkline: false,
      });

      setCoins(loadedCoins);
    } catch (error: AxiosError) {
      console.error(error.response.data.message);
    } finally {
      setLoaded(true);
    }
  };

  useEffect(() => {
    onLoadCoins();
  }, []);

  return (
    <Container>
      <HeadlineText>{t(isLoaded ? 'title' : 'loading')}</HeadlineText>

      <FlashList
        data={coins}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CurrencyItem t={t} item={item} />}
        ItemSeparatorComponent={Separator}
        estimatedItemSize={150}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 16,
          paddingHorizontal: 8,
        }}
      />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  padding: 16px 8px;
  background-color: ${color('surfaceBackground')};
`;

const Separator = styled.View`
  height: 8px;
`;
