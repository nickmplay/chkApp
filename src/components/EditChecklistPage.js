import React from 'react';
import { connect } from 'react-redux';
import { editChecklist, removeChecklist } from '../actions/checklists';
import { startRemoveChecklist, startEditChecklist } from '../actions/firebase';
import { ChecklistForm } from './ChecklistForm';

export class EditChecklistPage extends React.Component {
  onSubmit = (checklist) => {
    this.props.startEditChecklist(checklist);
    this.props.history.push('/');
  };
  onRemove = () => {
    if (confirm(`Are you sure you want to delete checklist ${this.props.checklist.name}?`)) {
      this.props.startRemoveChecklist(this.props.checklist.id);
      this.props.history.push('/');
    };
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit {this.props.checklist.name} checklist</h1>
          </div>
        </div>
        <ChecklistForm
          command="Edit"
          checklist={this.props.checklist}
          onSubmit={this.onSubmit}
        />
        <div className="content-container">
          <button className="button button--delete" onClick={this.onRemove}>Delete Checklist</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  checklist: state.checklists.find(e => e.id.toString() === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  startEditChecklist: (checklist) => dispatch(startEditChecklist(checklist)),
  startRemoveChecklist: (checklistIdToRemove) => dispatch(startRemoveChecklist(checklistIdToRemove))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditChecklistPage);
