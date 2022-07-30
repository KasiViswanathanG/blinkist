import {screen, fireEvent, getByText, render } from '@testing-library/react'
import React from 'react'
import renderer from 'react-test-renderer'

import CardComponent from '.'


describe('Testing the ImageComponent', () => {
    it('render CardComponent dots', () => {
      const card = renderer.create(<CardComponent imgLocation={'static/images/1.png'} title={'Bring Your Human to Work'} author={'Erica Keswin'} readTime={13} readers={'1.9k'} type={'dots'} onClick={() => {}} />).toJSON();
      expect(card).toMatchSnapshot();
    });

    it('render CardComponent Add to Library', () => {
        const card = renderer.create(<CardComponent imgLocation={'static/images/1.png'} title={'Bring Your Human to Work'} author={'Erica Keswin'} readTime={13} readers={'1.9k'} type={'Add To Library'} onClick={() => {}} />).toJSON();
        expect(card).toMatchSnapshot();
      });
    it('should call on click Add to Library', () => {
        const handleClick = jest.fn();
        render(<CardComponent imgLocation={'static/images/1.png'} title={'Bring Your Human to Work'} author={'Erica Keswin'} readTime={13} readers={'1.9k'} type={'Add To Library'} onClick={handleClick} />)
        const buttonElement = screen.getByText('Add To Library')
        fireEvent.click(buttonElement)
        expect(handleClick).toHaveBeenCalled();
        });

    it('should call on hover Add to Library', () => {
        render(<CardComponent imgLocation={'static/images/1.png'} title={'Bring Your Human to Work'} author={'Erica Keswin'} readTime={13} readers={'1.9k'} type={'Add To Library'} onClick={() => {}} />)
        const buttonElement = screen.getByText('Add To Library')
        fireEvent.mouseOver(buttonElement)
        fireEvent.mouseLeave(buttonElement)
    });

    it('render CardComponent Finished', () => {
      const card = renderer.create(<CardComponent imgLocation={'static/images/1.png'} title={'Bring Your Human to Work'} author={'Erica Keswin'} readTime={13} readers={'1.9k'} type={'Finished'} onClick={() => {}} />).toJSON();
      expect(card).toMatchSnapshot();
    });
    it('should call on click Finished', () => {
      const handleClick = jest.fn();
      render(<CardComponent imgLocation={'static/images/1.png'} title={'Bring Your Human to Work'} author={'Erica Keswin'} readTime={13} readers={'1.9k'} type={'Finished'} onClick={handleClick} />)
      const buttonElement = screen.getByText('Finished')
      fireEvent.click(buttonElement)
      expect(handleClick).toHaveBeenCalled();
      });

    it('render CardComponent Read again', () => {
        const card = renderer.create(<CardComponent imgLocation={'static/images/1.png'} title={'Bring Your Human to Work'} author={'Erica Keswin'} readTime={13} readers={'1.9k'} type={'Read again'} onClick={() => {}} />).toJSON();
        expect(card).toMatchSnapshot();
      });
    it('should call on click Read again', () => {
    const handleClick = jest.fn();
    render(<CardComponent imgLocation={'static/images/1.png'} title={'Bring Your Human to Work'} author={'Erica Keswin'} readTime={13} readers={'1.9k'} type={'Read again'} onClick={handleClick} />)
    const buttonElement = screen.getByText('Read again')
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalled();
    });
})  