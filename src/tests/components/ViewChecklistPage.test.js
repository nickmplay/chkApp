import React from 'react';
import { shallow } from 'enzyme';
import { ViewChecklistPage } from '../../components/ViewChecklistPage';
import checklists from '../fixtures/checklists';

test('should render ViewChecklistPage correctly with data', () => {
  const wrapper = shallow(<ViewChecklistPage checklist={[checklists[0]]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should change class upon clicking', () => {
  const onToggle = jest.fn();
  const targetMock = {
    target: { className: 'chk-unselected' }
  };
  const wrapper = shallow(<ViewChecklistPage
    onToggle={onToggle}
    checklist={[checklists[0]]}
  />);

  expect(wrapper).toMatchSnapshot();
  wrapper.find('p').at(0).simulate('click', targetMock);
  expect(targetMock).toEqual({
    target: { className: 'chk-selected' }
  });
  // expect(onToggle).toHaveBeenCalled();

  wrapper.find('p').at(0).simulate('click', targetMock);
  expect(targetMock).toEqual({
    target: { className: 'chk-unselected' }
  });
  // expect(onToggle).toHaveBeenCalled();
});