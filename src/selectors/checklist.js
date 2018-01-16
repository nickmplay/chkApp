//selector to return the items of a given checklist id

export const selectChecklist = (checklists, { id }) => {
    const filteredChecklist = checklists.filter( e => e.id === id);
    if (filteredChecklist.length == 1){
        return filteredChecklist[0].items;
    } else {
        return false;
    }
};

export const countChecklists = (checklists = []) => {
    return checklists.length;
}