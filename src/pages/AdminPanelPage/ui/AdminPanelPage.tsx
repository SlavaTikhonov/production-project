import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AdminPanelPage = memo(() => {
  const { t } = useTranslation('about');
  return <Page data-testid="AdminPanelPage">{t('Aдмин панель')}</Page>;
});

export default AdminPanelPage;
