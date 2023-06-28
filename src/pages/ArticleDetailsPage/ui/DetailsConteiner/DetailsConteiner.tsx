import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';

interface DetailsConteinerProps {
  className?: string;
}

export const DetailsConteiner = memo((props: DetailsConteinerProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  return (
    <Card max border="lightly" className={className} padding="24">
      <ArticleDetails id={id} />
    </Card>
  );
});
