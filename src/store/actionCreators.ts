import * as actionTypes from 'store/actionTypes';

export function addPersons(persons: IPerson[]) {
  const action = {
    type: actionTypes.ADD_PERSONS,
    payload: persons,
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

export function setActivePersonId(id: string) {
  const action = {
    type: actionTypes.SET_ACTIVE_PERSON_ID,
    payload: id,
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

export function deletePerson(id: string) {
  const action = {
    type: actionTypes.DELETE_PERSON,
    payload: id,
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

export function stopLoadingPersons() {
  const action = {
    type: actionTypes.STOP_LOADING,
    payload: null,
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

export function setIsLoading(value: boolean) {
  const action = {
    type: actionTypes.SET_IS_LOADING,
    payload: value,
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
