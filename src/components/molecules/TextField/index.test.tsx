import {screen, fireEvent, getByText, render } from '@testing-library/react'
import React from 'react'
import renderer from 'react-test-renderer'

import TextFieldComponent from '.'
import SearchIcon from '@mui/icons-material/Search';

describe('Testing the ImageComponent', () => {
    it('render TextFieldComponent', () => {
      const textField = renderer.create(<TextFieldComponent id={'search'} placeholder={'Search'} icon={undefined} length={200} onChange={undefined} />).toJSON();
      expect(textField).toMatchSnapshot();
    });

    it('render TextFieldComponent with icon', () => {
        const textField = renderer.create(<TextFieldComponent id={'search'} placeholder={'Search'} icon={<SearchIcon />} length={200} onChange={undefined} />).toJSON();
        expect(textField).toMatchSnapshot();
      });
})  