import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
  className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
  const { className } = props;

  const {
    onChangeSort,
    onChangeType,
    sort,
    type,
    onChangeSearch,
    search,
    onChangeOrder,
    order,
  } = useArticleFilters();

  return (
    <ArticlesFilters
      search={search}
      sort={sort}
      onChangeSort={onChangeSort}
      className={className}
      onChangeType={onChangeType}
      type={type}
      onChangeSearch={onChangeSearch}
      onChangeOrder={onChangeOrder}
      order={order}
    />
  );
});
