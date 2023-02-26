import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Input.module.scss';

export enum AppInputTheme {
    PRIMARY ='primary',
    SECONDARY='secondary',
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
    theme?:AppInputTheme;
}

export const Input = memo((props: InputProps) => {
    const { t } = useTranslation();
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>();
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.InputWrapper, { [cls[theme]]: true }, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}:`}
                </div>
            )}
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                {...otherProps}
            />
        </div>
    );
});
