import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Button } from '@/shared/ui/deprecated/Button';

interface BugButtonProps {
  className?: string;
}

// Компонент для тестирования ErrorBoundary

export const BugButton = () => {
  const { t } = useTranslation();

  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={onThrow}>{t('throww error')}</Button>;
};
