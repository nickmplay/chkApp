import React from 'react';
import { shallow } from 'enzyme';
import { DashboardPage } from '../../components/DashboardPage';
import checklists from '../fixtures/checklists';

test('should render DashboardPage correctly with data', () => {
  const wrapper = shallow(<DashboardPage checklists={checklists} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render DashboardPage correctly without data', () => {
  const wrapper = shallow(<DashboardPage checklists={[]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render DashboardPage correctly with only one', () => {
  const wrapper = shallow(<DashboardPage checklists={[checklists[0]]} />);
  expect(wrapper).toMatchSnapshot();
});