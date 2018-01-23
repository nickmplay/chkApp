import React from 'react';
import { Link } from 'react-router-dom';

export const ChecklistSelector = (props) => {
  return (
    <div>
      {props.checklists.map(checklist => {
        return (
          <div className="content-container list-item" key={checklist.id}>
            <Link to={`/view/${checklist.id}`}>
              <p  key={checklist.id + 1}>{checklist.name}</p>
            </Link>
            <Link key={checklist.id + 2} to={`/edit/${checklist.id}`}>Edit</Link>
          </div>
        );
      })}
    </div>);
};