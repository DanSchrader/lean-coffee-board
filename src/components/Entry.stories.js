import Entry from './Entry.js';

export default {
  title: 'components/Entry',
  component: Entry,
  argTypes: {
    onDelete: 'onDelete',
    onCheck: 'onCheck',
  },
};

const Template = args => <Entry {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'This is a text',
  author: 'Jane Doe',
  color: 'hotpink',
};

export const Checked = Template.bind({});
Default.args = {
  text: 'This is a text',
  author: 'Jane Doe',
  isChecked: true,
  color: 'hotpink',
};
