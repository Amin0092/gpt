import { shallow } from 'enzyme';
import * as React from 'react';
import { Dropdown } from '../Dropdown';
var enzyme = require('enzyme');

var Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

enzyme.configure({ adapter: new Adapter() });


describe('Dropdown', () => {
    test('should render', () => {
        const wrapper = enzyme.shallow(<Dropdown children={<div/>} button={<button/>} />)
        expect(wrapper).toBeDefined();
        expect(wrapper.find('buttonfsaas')).toBeDefined();
    })
})
