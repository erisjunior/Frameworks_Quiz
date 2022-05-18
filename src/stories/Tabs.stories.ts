import { Story, Meta } from '@storybook/angular/types-6-0';
import { TabsComponent } from '../app/tabs.component';

export default {
  title: 'Tabs/Tabs',
  component: TabsComponent,
  argTypes: {
  },
} as Meta;

const Template: Story<TabsComponent> = (args: TabsComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};

export const CustomValues = Template.bind({});
CustomValues.args = {
  tabs: [
    {
      id: 1,
      title: 'Title Alternativo 1',
      text: 'Text Alternativo 1'
    },
    {
      id: 2,
      title: 'Title Alternativo 2',
      text: 'Text Alternativo 2'
    },
    {
      id: 3,
      title: 'Title Alternativo 3',
      text: 'Text Alternativo 3'
    },
  ]
};
