import React from 'react';
import { countChecklists } from '../selectors/checklist';

export const ChecklistTitle = (props) => {
  const checklistsWord = props.checklists.length === 1 ? 'checklist' : 'checklists';

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">You have <span>{props.checklists.length}</span> {checklistsWord} to use:</h1>
        {/* <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div> */}
      </div>
    </div>
  );
};

export default ChecklistTitle;
