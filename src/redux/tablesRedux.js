

//selectors
export const getAllTables = state => state.tables;
export const getTableById = ({tables}, tableId) => tables.find( table => table.id === tableId);

//actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const EDIT_TABLE = createActionName('EDIT_TABLE');
const ADD_TABLE = createActionName('ADD_TABLE');
const REMOVE_TABLE = createActionName('RENOVE_TABLE');

//action creators
export const updateTables = payload => ({type: UPDATE_TABLES, payload});
export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables')
      .then( res => {
        if (res.ok){
          return res.json()
        }
          else {
            console.log('error', res.status);
          }
      }
    ).then(tables => dispatch(updateTables(tables)))
        
  }
};

export const editTable = payload => ({type: EDIT_TABLE, payload});
export const editTableRequest = (newTable) =>{
  return (dispatch) => {
    const option = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTable)
    };

    fetch(`http://localhost:3131/api/tables/${newTable.id}`, option)
       .then( res =>{
          if (res.ok){
            return res.json()
          } else{
            console.log('error', res.status);
          }
        } 
      ).then(dispatch( editTable(newTable)));
       
  }
};

export const addTable = payload => ({type: ADD_TABLE, payload});
export const addTableRequest = (newTable) => {
  return(dispatch) => {
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTable)
    };

    fetch('http://localhost:3131/api/tables', option)
    .then( res =>{
      if (res.ok){
        return res.json()
      } else{
        console.log('error', res.status);
      }
    } 
  ).then(dispatch(addTable(newTable)));
      
  }
};

export const removeTable = payload => ({type: REMOVE_TABLE, payload});
export const removeTableRequest = tableId => {
  return(dispatch) => {
    const option = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    };

    fetch(`http://localhost:3131/api/tables/${tableId}`, option)
    .then( res =>{
        if (res.ok){
          return res.json()
        } else{
          console.log('error', res.status);
        }
      } 
    ).then( dispatch(removeTable(tableId)));
  }

};


const tablesReducer = (statePart = [], action) => {
  
    switch (action.type){
      case UPDATE_TABLES:
        return [...action.payload]
      case EDIT_TABLE:
        return statePart.map( table => (table.id === action.payload.id ? {...table, ...action.payload} : table)) 
      case ADD_TABLE:
        return [...statePart, {...action.payload}]
      case REMOVE_TABLE:
        return statePart.filter( table => table.id !== action.payload)
      default:
        return statePart
    }
};

export default tablesReducer;