import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const ViewChecklistPage = (props) => (
  <div className="content-container">
    <h1>Viewing {props.checklist[0].name}</h1>
    {props.checklist[0].items.map( (e, i) => <p key={i}>{e}</p>)}
    <Link to="/">Return to dashboard</Link>
  </div>
);

const mapStateToProps = (state, props) => ({
  checklist: state.checklists.filter( e => e.id.toString() === props.match.params.id)
});

export default connect(mapStateToProps)(ViewChecklistPage);
