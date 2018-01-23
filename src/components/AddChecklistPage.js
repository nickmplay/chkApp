import React from 'react';
import { connect } from 'react-redux';
import { addChecklist } from '../actions/checklists';
import { ChecklistForm } from './ChecklistForm';

export class AddChecklistPage extends React.Component {
  onSubmit = ({name, items}) => {
    this.props.addChecklist({
      name,
      items
    });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Checklist</h1>
          </div>
        </div>
        <ChecklistForm 
          command="Add"
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addChecklist: (checklist) => dispatch(addChecklist(checklist))
});

export default connect(undefined, mapDispatchToProps)(AddChecklistPage);
