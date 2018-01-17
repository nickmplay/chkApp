import React from 'react';
import { connect } from 'react-redux';
import { ChecklistTitle } from './ChecklistTitle';
import { ChecklistSelector } from './ChecklistSelector';

export const DashboardPage = (props) => (
  <div>
    <ChecklistTitle checklists={props.checklists} />
    <ChecklistSelector checklists={props.checklists} />
  </div>
);

const mapStateToProps = (state, props) => ({
  checklists: state.checklists
});

export default connect(mapStateToProps)(DashboardPage);
