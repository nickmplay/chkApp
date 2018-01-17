import React from 'react';
import { shallow } from 'enzyme';
import { DashboardPage } from '../../components/DashboardPage';
import checklists from '../fixtures/checklists';

test('should render DashboardPage correctly', () => {
  const wrapper = shallow(<DashboardPage checklists={checklists} />);
  expect(wrapper).toMatchSnapshot();
});
