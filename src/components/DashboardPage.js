import React from 'react';
import { connect } from 'react-redux';
import { ChecklistTitle } from './ChecklistTitle';

export const DashboardPage = (props) => (
  <div>
    <ChecklistTitle checklists={props.checklists} />
    {props.checklists.map( checklist => {
      return <p className="content-container" key={checklist.id}>{checklist.name}</p>;
    })}
  </div>
);

const mapStateToProps = (state, props) => ({
  checklists: state.checklists
});

export default connect(mapStateToProps)(DashboardPage);
