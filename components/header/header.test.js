import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Header from './header';
import { renderWithContext } from "../../utils/common-function";

describe("Header Component", () => {
    test("should display Header title", () => {
        renderWithContext(<Header />);
        const headerTitle = screen.getByText('A Proof Of Concept Related To Posts');
        expect(headerTitle).toBeInTheDocument();
    });

    test("should check if two buttons are present are not", () => {
        renderWithContext(<Header />);

        const buttons = screen.getAllByRole('link');
        expect(buttons.length).toBe(2);
    });
});