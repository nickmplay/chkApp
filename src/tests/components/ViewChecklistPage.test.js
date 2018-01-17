import React from 'react';
import { shallow } from 'enzyme';
import { ViewChecklistPage } from '../../components/ViewChecklistPage';
import checklists from '../fixtures/checklists';

test('should render ViewChecklistPage correctly with data', () => {
  const wrapper = shallow(<ViewChecklistPage checklist={[checklists[0]]} />);
  expect(wrapper).toMatchSnapshot();
});