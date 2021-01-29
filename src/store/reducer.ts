import * as actionTypes from './actionTypes';

const initialState: PersonsState = {
  persons: [],
  allPersonsLoaded: false,
  activePersonId: '',
  isLoading: false,
};

const reducer = (state: PersonsState = initialState, action: PersonAction): PersonsState => {
  console.log(action);
  switch (action.type) {
    case actionTypes.ADD_PERSONS:
      return {
        ...state,
        persons: state.persons.concat(action.payload),
      };
    case actionTypes.DELETE_PERSON:
      return {
        ...state,
        persons: state.persons.filter((h) => h._id !== action.payload),
      };
    case actionTypes.STOP_LOADING:
      return {
        ...state,
        allPersonsLoaded: true,
      };
    case actionTypes.SET_ACTIVE_PERSON_ID:
      return {
        ...state,
        activePersonId: action.payload,
      };
    case actionTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
  }
  return state;
};

export default reducer;
