//selector to return the items of a given checklist id

export default (checklists, { id }) => {
    const filteredChecklist = checklists.filter( e => e.id === id);
    if (filteredChecklist.length == 1){
        return filteredChecklist[0].items;
    } else {
        return false;
    }
};