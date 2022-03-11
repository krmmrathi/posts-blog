import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import PostItem from './post-item';

const props = {
    user: {
        name: "Eliseo",
        email: "Eliseo@gardner.biz",
    },
    details: {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    props:{
        handleEditNavigation: jest.fn(),
        handleDetailsNavigation: jest.fn(),
        handleDeletePost: jest.fn(),
    }

};

describe("PostItem Component", () => {
    test("should display PostItem heading", () => {
        render(<PostItem {...props}/>);
        const postItemTitle = screen.getByText('Post #1 created by Eliseo');
        expect(postItemTitle).toBeInTheDocument();
    });

    test("should render correct number of buttons", () => {
        render(<PostItem {...props}/>);

        const buttons = screen.getAllByRole('button');
        const editButtons = screen.getAllByText('Edit');
        const deleteButtons = screen.getAllByText('Delete');
        expect(buttons.length).toBe(3);
        expect(editButtons.length).toBe(1);
        expect(deleteButtons.length).toBe(1);
    });

    
});