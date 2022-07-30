import {screen, fireEvent, getByText, render } from '@testing-library/react'
import React from 'react'
import renderer from 'react-test-renderer'

import FooterComponent from '.'


describe('Testing the FooterComponent', () => {
    it('render FooterComponent', () => {
      const footer = renderer.create(<FooterComponent />).toJSON();
      expect(footer).toMatchSnapshot();
    });
})  