/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

Enzyme.configure({
  adapter: new Adapter()
});

// Make Enzyme functions available in all test files without importing
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
