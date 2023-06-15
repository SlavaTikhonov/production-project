import React, { memo } from 'react';
import AppSvg from '../../../assets/icons/app-image.svg';
import cls from './AppLogo.module.scss';
import { HStack } from '../../deprecated/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo = memo(({ className, size = 50 }: AppLogoProps) => {
  return (
    <HStack
      max
      justify="center"
      className={classNames(cls.appLogoWrapper, {}, [className])}
    >
      <AppSvg
        width={size}
        height={size}
        color="black"
        className={cls.appLogo}
      />
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
    </HStack>
  );
});
