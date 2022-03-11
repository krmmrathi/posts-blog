import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Header from './header';

describe("Header Component", () => {
    test("should display Header title", () => {
        render(<Header />);
        const headerTitle = screen.getByText('A Proof Of Concept Related To Posts');
        expect(headerTitle).toBeInTheDocument();
    });

    test("should check if two buttons are present are not", () => {
        render(<Header />);

        const buttons = screen.getAllByRole('link');
        expect(buttons.length).toBe(2);
    });
});