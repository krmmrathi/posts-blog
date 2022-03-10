import React from 'react';

import PostItem from '../components/post/post-item';

export default {
  title: 'Example/PostItem',
  component: PostItem,
};

const Template = (args) => <PostItem {...args}/>;

export const Example = Template.bind({});
Example.args = {
  props: {
    handleEditNavigation: () => {window.alert("This helps to navigate to editing screen");},
    handleDetailsNavigation:() => {window.alert("This helps to navigate to details screen");},
    handleDeletePost:() => {window.alert("This helps to delete");}
  },
  details: {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      
  },
  user: {
    name: "Mayank"
  },
};