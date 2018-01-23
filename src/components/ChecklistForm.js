import React from 'react';

export class ChecklistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      command: props.command,
      name: props.checklist ? props.checklist.name : '',
      items: props.checklist ? props.checklist.items.join(',') : ''
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

    this.props.onSubmit({
      name: this.state.name,
      items: this.state.items.split(',')
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
          <button className="button">{this.state.command} Checklist</button>
        </form>
      </div>
    );
  }
}