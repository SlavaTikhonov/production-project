import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const MainPage = memo(() => {
    const { t } = useTranslation();

    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page data-testid="MainPage">
            <img
                src="../shared/assets/images/photo_2023-02-17_14-40-01.jpg"
                alt="#"
            />
            <div>12312312312312</div>
            {t('Главная страница')}
        </Page>
    );
});

export default MainPage;
