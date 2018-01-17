import React from 'react';

export const ChecklistSelector = (props) => {
  return (
    <div>
      {props.checklists.map(checklist => {
        return <p className="content-container" key={checklist.id}>{checklist.name}</p>;
      })}
    </div>);
};