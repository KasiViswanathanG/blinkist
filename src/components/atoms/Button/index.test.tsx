import {screen, fireEvent, getByText, render } from '@testing-library/react'
import React from 'react'
import renderer from 'react-test-renderer'

import Button from '.'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddIcon from '@mui/icons-material/Add';

describe('Testing the Button', () => {
  it('render default button', () => {
    const button = renderer.create(<Button>Button</Button>).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('render disabled button', () => {
    const button = renderer.create(<Button disabled>Button</Button>).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('render contained button', () => {
    const button = renderer.create(<Button variant='contained' disabled>Button</Button>).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('render contained button with icon', () => {
    const button = renderer.create(<Button variant='contained' endIcon={<ArrowForwardIcon />} disabled>Button</Button>).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('render outlined button', () => {
    const button = renderer.create(<Button variant='outlined' disabled>Button</Button>).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('render outlined button with icon', () => {
    const button = renderer.create(<Button variant='outlined' endIcon={<ArrowForwardIcon />} disabled>Button</Button>).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('render text button', () => {
    const button = renderer.create(<Button variant='text' disabled>Button</Button>).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('render text button with icon', () => {
    const button = renderer.create(<Button variant='text' startIcon={<AddIcon />} disabled>Button</Button>).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('render secondary button', () => {
    const button = renderer.create(<Button variant='text' color='secondary' disabled>Button</Button>).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('should call on click', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Finished</Button>)
    const buttonElement = screen.getByText('Finished')
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalled();
  });
})