import React from 'react';
import { Link } from 'react-router-dom';

export const ChecklistSelector = (props) => {
  return (
    <div>
      {props.checklists.map(checklist => {
        return (
          <Link className="content-container list-item" key={checklist.id} to={`/view/${checklist.id}`}>
            <p className="content-container" key={checklist.id}>{checklist.name}</p>
          </Link>
        );
      })}
    </div>);
};