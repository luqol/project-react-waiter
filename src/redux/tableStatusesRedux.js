//selectors
export const getAllStatuses = state => state.tableStatuses;
//actions
const createActionName = actionName => `app/tableStatuses/${actionName}`;
const UPDATE_STATUSES = createActionName("UPDATE_STATUSES");

//action creators
export const updateStatuses = payload => ({type: UPDATE_STATUSES, payload});
export const fetchStatuses = () => {
    return (dispatch) => {
      fetch('http://localhost:3131/api/tableStatuses')
        .then( res => res.json())
          .then(tables => dispatch(updateStatuses(tables)))
    }
  };

const tableStatusesReducer = (statePart = [], action) => {

    switch (action.type){
      case UPDATE_STATUSES:
        return [...action.payload]
      default:
        return statePart
    }
};

export default tableStatusesReducer;