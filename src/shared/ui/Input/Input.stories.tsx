import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppInputTheme, Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Ligth = Template.bind({});
Ligth.args = {
    placeholder: 'Type text',
    value: '1234',
    theme: AppInputTheme.PRIMARY,
};

export const Dark = Template.bind({});
Dark.args = {
    placeholder: 'Type text',
    value: '1234',
    theme: AppInputTheme.SECONDARY,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
