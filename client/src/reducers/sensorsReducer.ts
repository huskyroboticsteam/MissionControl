import { UPDATE_SENSORS } from '../actions/sensors/types';

const initialState = {
  data: {
    timestamp: 0,
    temperature: 129,
  }
};

const sensorsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_SENSORS:
      return {
        ...initialState,
        data: action.payload
      };
    default:
      return state;
  }
};

export default sensorsReducer;
