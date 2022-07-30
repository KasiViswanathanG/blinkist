import {screen, fireEvent, getByText, render } from '@testing-library/react'
import React from 'react'
import renderer from 'react-test-renderer'

import IconComponent from '.'
import SearchIcon from '@mui/icons-material/Search';
import RocketIcon from '@mui/icons-material/Rocket';
import EntrepreneurshipPage from '../../../pages/Entrepreneurship';

describe('Testing the IconComponent', () => {
  it('render default IconComponent', () => {
    const icon = renderer.create(<IconComponent icon={undefined} title={''} titleColor={''} onClick={() => {}} />).toJSON();
    expect(icon).toMatchSnapshot();
  });

  it('render IconComponent', () => {
    const icon = renderer.create(<IconComponent icon={<SearchIcon/>} title={''} titleColor={''} onClick={() => {}} />).toJSON();
    expect(icon).toMatchSnapshot();
  });

  it('render IconComponent with title', () => {
    const icon = renderer.create(<IconComponent icon={<RocketIcon />} title={'Entrepreneurship'} titleColor={''} onClick={() => {}} />).toJSON();
    expect(icon).toMatchSnapshot();
  });
})