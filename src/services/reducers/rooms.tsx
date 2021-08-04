import {
    GET_ROOMS_FAILED,
    GET_ROOMS_REQUEST,
    GET_ROOMS_SUCCESS,
    POST_ROOMS_FAILED,
    POST_ROOMS_REQUEST,
    POST_ROOMS_SUCCESS,
  } from '../actions/rooms';
  import {TRooms} from '../../types'
  import {TRoomsActions} from '../actions/rooms'
  type TInitialState = {
    roomsSuccess: any,
    roomsRequest: boolean,
    roomsFailed: any,
    roomSuccess: any,
    roomRequest: boolean,
    roomFailed: any,
  }
  
  const initialState: TInitialState = {
    roomsSuccess: [],
    roomsRequest: false,
    roomsFailed: false,
    roomSuccess: [],
    roomRequest: false,
    roomFailed: false,
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
      case POST_ROOMS_REQUEST: {
        return {
          ...state,
          roomRequest: true
        };
      }
      case POST_ROOMS_SUCCESS: {
        return { 
          ...state, 
          roomFailed: false, 
          roomSuccess: action.payload.room, 
          roomRequest: false 
        };
      }
      case POST_ROOMS_FAILED: {
        return { 
          ...state, 
          roomFailed: action.payload, 
          roomRequest: false 
        };
      }
      default: {
        return state;
      }
    }
  };