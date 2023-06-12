import React, { memo } from 'react';
import AppSvg from '../../../assets/icons/app-image.svg';
import cls from './AppLogo.module.scss';
import { HStack } from '../Stack';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AppLogoProps {
  className?: string;
}

/**
 * Компонент устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const AppLogo = memo(({ className }: AppLogoProps) => {
  return (
    <HStack
      max
      justify="center"
      className={classNames(cls.appLogoWrapper, {}, [className])}
    >
      <AppSvg className={cls.appLogo} />
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
    </HStack>
  );
});
