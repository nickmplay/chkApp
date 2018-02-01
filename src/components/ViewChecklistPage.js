import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


export class ViewChecklistPage extends React.Component {
  onToggle = (e) => {
    if (e.target.className == 'chk-unselected') {
      e.target.className = 'chk-selected';
    } else {
      e.target.className = 'chk-unselected';
    }
  }

  render() {
    return (
      <div className="content-container">
        <h1>Viewing {this.props.checklist[0].name}</h1>
        {this.props.checklist[0].items.map((e, i) => <p className='chk-unselected' onClick={this.onToggle} key={i}> {e}</p>)}
        <Link to="/">Return to dashboard</Link>
      </div>
    )
  };
};

const mapStateToProps = (state, props) => ({
  checklist: state.checklists.filter(e => e.id.toString() === props.match.params.id)
});

export default connect(mapStateToProps)(ViewChecklistPage);
