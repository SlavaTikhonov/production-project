import { Modal } from 'shared/ui/Modal/Modal';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Ligth = Template.bind({});
Ligth.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis delectus dolor expedita labore, modi molestiae obcaecati provident quaerat sit sunt!\n',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis delectus dolor expedita labore, modi molestiae obcaecati provident quaerat sit sunt!\n',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
