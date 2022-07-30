import {screen, fireEvent, getByText, render } from '@testing-library/react'
import React from 'react'
import renderer from 'react-test-renderer'
import AppBarComponent from '.'
import { BrowserRouter as Router} from 'react-router-dom';


describe('Testing the ImageComponent', () => {
    it('render ImageComponent', () => {
      const image = renderer.create(<Router><AppBarComponent/></Router>).toJSON();
      expect(image).toMatchSnapshot();
    });
    it('should call on click Explore', () => {
      const handleClick = jest.fn();
      render(<Router><AppBarComponent/></Router>)
      const buttonElement = screen.getByText('Explore')
      fireEvent.click(buttonElement)
    });
    it('should call on click Explore and Explore', () => {
      const handleClick = jest.fn();
      render(<Router><AppBarComponent/></Router>)
      const buttonElement = screen.getByText('Explore')
      fireEvent.click(buttonElement)
      const buttonElement2 = screen.getByTestId('ModalExplore')
      fireEvent.click(buttonElement2)
    });
    it('should call on click Explore and MyLibrary', () => {
      const handleClick = jest.fn();
      render(<Router><AppBarComponent/></Router>)
      const buttonElement = screen.getByText('Explore')
      fireEvent.click(buttonElement)
      const buttonElement2 = screen.getByTestId('ModalMyLibrary')
      fireEvent.click(buttonElement2)
    });
    it('should call on click Explore and Entrepreneurship', () => {
      const handleClick = jest.fn();
      render(<Router><AppBarComponent/></Router>)
      const buttonElement = screen.getByText('Explore')
      fireEvent.click(buttonElement)
      const buttonElement2 = screen.getByText('Entrepreneurship')
      fireEvent.click(buttonElement2)
    });
    it('should call on click Explore and Entrepreneurship on Hover', () => {
      const handleClick = jest.fn();
      render(<Router><AppBarComponent/></Router>)
      const buttonElement = screen.getByText('Explore')
      fireEvent.click(buttonElement)
      const buttonElement2 = screen.getByText('Entrepreneurship')
      fireEvent.mouseOver(buttonElement2)
      fireEvent.mouseLeave(buttonElement2)
    });
    it('should call on click My Library', () => {
      const handleClick = jest.fn();
      render(<Router><AppBarComponent/></Router>)
      const buttonElement = screen.getByText('My Library')
      fireEvent.click(buttonElement)
    });
})  