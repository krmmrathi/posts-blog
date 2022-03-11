import React from "react";
import '@testing-library/jest-dom'
import {  screen } from '@testing-library/react';
import PostListing from './post-listing';
import { renderWithContext } from "../../utils/common-function";

const props = {
    user: [{
        id: 1,
        name: "Eliseo",
        email: "Eliseo@gardner.biz",
    },
    {
        id: 2,
        name: "Mayank",
        email: "Mayank@gardner.biz",
    }
    ],
    posts: [
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 2,
        id: 2,
        title: "Title2",
        body: "Body2",
    },
    ],
    infiniteScrollProps: {
        hasMore: true,
        fetchMoreData: jest.fn()
    },
    postProps:{
        handleEditNavigation: jest.fn(),
        handleDetailsNavigation: jest.fn(),
        handleDeletePost: jest.fn(),
    }

};

describe("PostItem Component", () => {
    test("should display PostListing heading", () => {
        renderWithContext(<PostListing {...props}/>);
        const PostListingTitle = screen.getByText('All Posts');
        expect(PostListingTitle).toBeInTheDocument();
    });

    test("should render correct number of buttons", () => {
        renderWithContext(<PostListing {...props}/>);

        const buttons = screen.getAllByRole('button');
        const editButtons = screen.getAllByText('Edit');
        const deleteButtons = screen.getAllByText('Delete');
        expect(buttons.length).toBe(6);
        expect(editButtons.length).toBe(2);
        expect(deleteButtons.length).toBe(2);
    });

    
});