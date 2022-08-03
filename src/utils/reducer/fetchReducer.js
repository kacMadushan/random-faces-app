import {
  RESPONSE_INIT,
  RESPONSE_COMPLETED,
  RESPONSE_ERROR
} from '../../constants';

// DEFAULT STATE
export const fetchdefaultState = {
  results: null,
  loading: true,
  error: null
};

export const fetchReducer = (state, action) => {
  switch (action.type) {
    case RESPONSE_INIT:
      return {
        results: null,
        loading: true,
        error: null
      }
    case RESPONSE_COMPLETED:
      return {
        results: action.payload.results,
        loading: false,
        error: null
      }
    case RESPONSE_ERROR:
      return {
        results: null,
        loading: false,
        error: action.payload.error
      }
    default:
      return state;
  }
};