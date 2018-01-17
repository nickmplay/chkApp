import React from 'react';
import { shallow } from 'enzyme';
import { ChecklistTitle } from '../../components/ChecklistTitle';
import checklists from '../fixtures/checklists';

test('should render ChecklistTitle correctly with data', () => {
  const wrapper = shallow(<ChecklistTitle checklists={checklists} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ChecklistTitle correctly without data', () => {
    const wrapper = shallow(<ChecklistTitle checklists={[]} />);
    expect(wrapper).toMatchSnapshot();
});
  
test('should render ChecklistTitle correctly with only one', () => {
    const wrapper = shallow(<ChecklistTitle checklists={[checklists[0]]} />);
    expect(wrapper).toMatchSnapshot();
});