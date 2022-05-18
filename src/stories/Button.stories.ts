import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../app/button.component';

export default {
  title: 'Tabs/Button',
  component: ButtonComponent,
  argTypes: {
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Focused = Template.bind({});
Focused.args = {
  focused: true,
};
