import {screen, fireEvent, getByText, render } from '@testing-library/react'
import React from 'react'
import renderer from 'react-test-renderer'

import AvatarComponent from '.'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


describe('Testing the AvatarComponent', () => {
    it('render single name AvatarComponent', () => {
      const avatar = renderer.create(<AvatarComponent userName={'Viswanthan'} color={undefined} icon={undefined}/>).toJSON();
      expect(avatar).toMatchSnapshot();
    });

    it('render double name AvatarComponent', () => {
      const avatar = renderer.create(<AvatarComponent userName={'Kasi Viswanthan'} color={undefined} icon={undefined}/>).toJSON();
      expect(avatar).toMatchSnapshot();
    });

    it('render double name AvatarComponent with deafult color', () => {
      const avatar = renderer.create(<AvatarComponent userName={'Kasi Viswanthan'} color={''} icon={undefined}/>).toJSON();
      expect(avatar).toMatchSnapshot();
    });

    it('render double name AvatarComponent with color', () => {
      const avatar = renderer.create(<AvatarComponent userName={'Kasi Viswanthan'} color={'purple'} icon={undefined}/>).toJSON();
      expect(avatar).toMatchSnapshot();
    });

    it('render double name AvatarComponent with color and icon', () => {
        const avatar = renderer.create(<AvatarComponent userName={'Kasi Viswanthan'} color={'purple'} icon={<KeyboardArrowDownIcon />}/>).toJSON();
        expect(avatar).toMatchSnapshot();
      });
})  