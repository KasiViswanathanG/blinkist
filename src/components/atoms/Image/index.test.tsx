import {screen, fireEvent, getByText, render } from '@testing-library/react'
import React from 'react'
import renderer from 'react-test-renderer'

import ImageComponent from '.'


describe('Testing the ImageComponent', () => {
    it('render ImageComponent', () => {
      const image = renderer.create(<ImageComponent imgLocation={'static/images/1.png'} />).toJSON();
      expect(image).toMatchSnapshot();
    });
})  