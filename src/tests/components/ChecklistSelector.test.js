import React from 'react';
import { shallow } from 'enzyme';
import { ChecklistSelector } from '../../components/ChecklistSelector';
import checklists from '../fixtures/checklists';

test('should render ChecklistSelector correctly with data', () => {
  const wrapper = shallow(<ChecklistSelector checklists={checklists} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ChecklistSelector correctly without data', () => {
  const wrapper = shallow(<ChecklistSelector checklists={[]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ChecklistSelector correctly with only one', () => {
  const wrapper = shallow(<ChecklistSelector checklists={[checklists[0]]} />);
  expect(wrapper).toMatchSnapshot();
});