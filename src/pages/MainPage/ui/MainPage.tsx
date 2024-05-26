import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const MainPage = memo(() => {
  const { t } = useTranslation();

  return (
    <Page data-testid="MainPage">
      <div>login: admin</div>
        <div>password: 123</div>
      {t('Главная страница')}
    </Page>
  );
});

export default MainPage;
