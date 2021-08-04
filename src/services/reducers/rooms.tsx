import {
    GET_ROOMS_FAILED,
    GET_ROOMS_REQUEST,
    GET_ROOMS_SUCCESS,
  } from '../actions/rooms';
  import {TRooms} from '../../types'
  import {TRoomsActions} from '../actions/rooms'
  type TInitialState = {
    roomsSuccess: any,
    roomsRequest: boolean,
    roomsFailed: any,
  }
  
  const initialState: TInitialState = {
    roomsSuccess: [],
    roomsRequest: false,
    roomsFailed: false,
  };
  
  export const roomsReducer = (state = initialState, action:TRoomsActions): TInitialState => {
    switch (action.type) {
      case GET_ROOMS_REQUEST: {
        return {
          ...state,
          roomsRequest: true
        };
      }
      case GET_ROOMS_SUCCESS: {
        return { 
          ...state, 
          roomsFailed: false, 
          roomsSuccess: action.payload.rooms, 
          roomsRequest: false 
        };
      }
      case GET_ROOMS_FAILED: {
        return { 
          ...state, 
          roomsFailed: action.payload, 
          roomsRequest: false 
        };
      }
      default: {
        return state;
      }
    }
  };