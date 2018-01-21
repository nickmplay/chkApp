import React from 'react';
import { connect } from 'react-redux';
import { addChecklist } from '../actions/checklists';

export class AddChecklistPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.checklist ? props.checklist.name : '',
      items: props.checklist ? props.checklist.items.join(',') : ''
    };
  }
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(()=>({ name }));
  };
  onItemChange = (e) => {
    const newItem = e.target.value;
    this.setState(()=>({ items: newItem }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    //form validation

    this.props.addChecklist({
      name: this.state.name,
      items: this.state.items.split(',')
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
        <div className="content-container">
          <form className="form" onSubmit={this.onSubmit}>
            <input
              type='text'
              placeholder='Checklist Name'
              value={this.state.name}
              onChange={this.onNameChange}
            />
            <textarea 
              type='text' 
              placeholder='Add Items, seperating each with a comma. Eg Item 1, Item 2, Item 3' 
              value={this.state.items}
              onChange={this.onItemChange}
              />
            <button className="button">Add Checklist</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addChecklist: (checklist) => dispatch(addChecklist(checklist))
});

export default connect(undefined, mapDispatchToProps)(AddChecklistPage);
