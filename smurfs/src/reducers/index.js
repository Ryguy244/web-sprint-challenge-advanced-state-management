import {
  GET_DATA_FAIL,
  GET_DATA_START,
  GET_DATA_SUCCESS,
  DISPLAY_ALL_SMURFS,
} from "../actions/index";

const initialState = {
  smurfData: {
    name: "",
    age: "",
    height: "",
  },
  is_loading_data: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_START:
      return {
        ...state,
        is_loading_data: true,
      };
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        is_loading_data: false,
        smurfData: action.payload,
      };
    }
    case GET_DATA_FAIL: {
      return {
        ...state,
        is_loading_data: false,
        error: action.payload,
      };
    }
    case DISPLAY_ALL_SMURFS: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
