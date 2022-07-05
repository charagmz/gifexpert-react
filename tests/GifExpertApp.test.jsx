import { screen, render, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Pruebas en <GifExpertApp />', () => { 
    test('Que tenga el titulo GifExpertAppp', () => {
        render(<GifExpertApp />);
        expect(screen.getByRole('heading', {level:1}).innerHTML).toContain('GifExpertApp');
    });

    test('Que no haga nada cuando se le ingrese la misma categoria', () => {
        render(<GifExpertApp />);
        // const onNewCategory = jest.fn();
        const inputValue = 'One punch';
        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');
        fireEvent.input(input, { target: { value: inputValue}});
        fireEvent.submit(form);
        fireEvent.input(input, { target: { value: inputValue}});
        fireEvent.submit(form);
        // screen.debug();
        expect(screen.getAllByRole('heading', {level:3}).length).toBe(1);
    });

    test('Que se actualice cuando se le ingrese una nueva categoria', () => {
        render(<GifExpertApp />);
        // const onNewCategory = jest.fn();
        const inputValue = 'Goku';
        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');
        fireEvent.input(input, { target: { value: inputValue}});
        fireEvent.submit(form);
        expect(screen.getAllByRole('heading', {level:3}).length).toBe(2);
    });
});