import React from 'react';

import Layout from '../components/layout/layout';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Layout',
  component: Layout,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Layout>{args.children}</Layout>;

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {children: <h1>{"Hi I will be rendered as a child of Layout component"}</h1>};