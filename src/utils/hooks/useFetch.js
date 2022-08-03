import { useEffect, useReducer } from 'react';
import {
  RESPONSE_INIT,
  RESPONSE_COMPLETED,
  RESPONSE_ERROR
} from '../../constants';
import { fetchdefaultState, fetchReducer } from '../reducer/fetchReducer';
import { allUsers } from '../../services/userServices';
import uuid from 'uuid';

const useFetch = (url) => {
  const [state, dispatch] = useReducer(fetchReducer, fetchdefaultState);

  useEffect(() => {
    const fetchAllUsers = async () => {
      dispatch({ type: RESPONSE_INIT })
      try {
        const response = await allUsers(url);
        const results = await response.data.results;
        const data = results.map((user) => ({ ...user, setId: uuid() }))
        dispatch({ type: RESPONSE_COMPLETED, payload: { results: data } });
      } catch (error) {
        dispatch({ type: RESPONSE_ERROR, payload: { error: error.message } })
      }
    }
    fetchAllUsers();
  }, [url])

  return [state.loading, state.results, state.error];
}

export default useFetch;