import React from 'react';

export class ChecklistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      command: props.command,
      name: props.checklist ? props.checklist.name : '',
      items: props.checklist ? props.checklist.items.join(', ') : '',
      id: props.checklist ? props.checklist.id : ''
    };
  }
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onItemChange = (e) => {
    const newItem = e.target.value;
    this.setState(() => ({ items: newItem }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    //form validation
    if(this.state.name.length < 1 && this.state.items.length < 1){
      alert('Please enter a checklist name and items');
      return false;
    }
    
    if(this.state.name.length < 1){
      alert('Please enter a checklist name');
      return false;
    }

    if(this.state.items.length < 1){
      alert('Please enter some items for the checklist');
      return false;
    }

    // submit validated form
    this.props.onSubmit({
      name: this.state.name,
      items: this.state.items.split(', '),
      id: this.state.id
    });
  };

  render() {
    return (
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
          <button className="button">{this.state.command == "Add" ? "Add" : "Save"} Checklist</button>
        </form>
      </div>
    );
  }
}