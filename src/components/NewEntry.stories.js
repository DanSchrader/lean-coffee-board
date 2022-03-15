import NewEntry from './NewEntry.js';

export default {
  title: 'components/NewEntry',
  component: NewEntry,
};

const Template = args => <NewEntry {...args} />;

export const Default = Template.bind({});
Default.args = {};
