import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Details from './details';

const props = {
    comments: [{
        postId: 1,
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    }],
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

describe("Details Component", () => {
    test("should display Post Id", () => {
        render(<Details {...props} />);
        const postText = screen.getByText('Post #' + props.details.id);
        expect(postText).toBeInTheDocument();
    });

    test("should display User", () => {
        render(<Details {...props} />);
        const userText = screen.getByText('created by ' + props.user.name);
        expect(userText).toBeInTheDocument();
    });

    test("should display number of comments", () => {
        render(<Details {...props} />);
        const noOfCommentsText = screen.getByText(props.comments.length + ' comment(s)');
        expect(noOfCommentsText).toBeInTheDocument();
    });
});