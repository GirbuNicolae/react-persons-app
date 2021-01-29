import axios from 'axios';
import { addPersons } from 'store/actionCreators';

export const getPersons = async (api: string, dispatch: Function): Promise<any> => {
  let reqResponse = {
    data: [],
  };
  try {
    reqResponse = await loadPersonsRequest(api);
  } catch {
    console.error('Error while fetching data from API');
  }
  dispatch(addPersons(reqResponse.data));
  return reqResponse;
};

function loadPersonsRequest(api: string) {
  return axios.get(api);
}
