import React from 'react';
import { connect } from 'react-redux';

export const DashboardPage = (props) => (
  <div className="content-container">
    <h1>You have {props.checklists.length} checklists to use:</h1>
    {props.checklists.map( checklist => {
      return <p key={checklist.id}>{checklist.name}</p>;
    })}
  </div>
);

const mapStateToProps = (state, props) => ({
  checklists: state.checklists
});

export default connect(mapStateToProps)(DashboardPage);
