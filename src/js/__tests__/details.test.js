import React from 'react';
import { create } from 'react-test-renderer';
import Details from '../pages/details';

test('snapshot', () => {
  const wrapper = create(<Details />);
  expect(wrapper.toJSON()).toMatchSnapshot();
});

test('show modal when toggalModal is called', () => {
  const wrapper = create(<Details search={() => {}} />);
  const instance = wrapper.getInstance();

  expect(instance.state.showModal).toBe(false);
  instance.toggleModal();
  expect(instance.state.showModal).toBe(true);
});
