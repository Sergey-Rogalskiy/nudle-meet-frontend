import {
    GET_ROOMS_FAILED,
    GET_ROOMS_REQUEST,
    GET_ROOMS_SUCCESS,
    POST_ROOMS_FAILED,
    POST_ROOMS_REQUEST,
    POST_ROOMS_SUCCESS,
    GET_ROOM_BY_ID_FAILED,
    GET_ROOM_BY_ID_REQUEST,
    GET_ROOM_BY_ID_SUCCESS,
    SET_USER_SUCCESS,
    DELETE_LEAVE_FAILED,
    DELETE_LEAVE_REQUEST,
    DELETE_LEAVE_SUCCESS,
  } from '../actions/rooms';
  import { WS_GET_MESSAGE } from '../actions/rooms';
  import {TRoomsActions} from '../actions/rooms'
  type TInitialState = {
    roomsSuccess: any,
    roomsRequest: boolean,
    roomsFailed: any,
    roomSuccess: any,
    roomRequest: boolean,
    roomFailed: any,
    roomByIDSuccess: any,
    roomByIDRequest: boolean,
    roomByIDFailed: any,
    user: any
  }
  
  const initialState: TInitialState = {
    roomsSuccess: [],
    roomsRequest: false,
    roomsFailed: false,
    roomSuccess: {},
    roomRequest: false,
    roomFailed: false,
    roomByIDSuccess: [],
    roomByIDRequest: false,
    roomByIDFailed: false,
    user: null
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
          roomRequest: false,
          user: action.payload.room.owner
        };
      }
      case SET_USER_SUCCESS: {
        return { 
          ...state, 
          user: action.payload.user
        };
      }
      case POST_ROOMS_FAILED: {
        return { 
          ...state, 
          roomFailed: action.payload, 
          roomRequest: false 
        };
      }
      case GET_ROOM_BY_ID_REQUEST: {
        return {
          ...state,
          roomByIDRequest: true
        };
      }
      case GET_ROOM_BY_ID_SUCCESS: {
        return { 
          ...state, 
          roomByIDFailed: false, 
          roomByIDSuccess: action.payload.data, 
          roomByIDRequest: false 
        };
      }
      case GET_ROOM_BY_ID_FAILED: {
        return { 
          ...state, 
          roomByIDFailed: action.payload, 
          roomByIDRequest: false 
        };
      }
      case WS_GET_MESSAGE: {
        let newRoomByID = {...state.roomByIDSuccess}
        
        if (state.roomByIDSuccess.owner === action.payload.owner) {
          newRoomByID.messages = action.payload.messages
          return { 
            ...state, 
            roomByIDSuccess: newRoomByID, 
          };
        }
        return { 
          ...state,
        };
      }
      case DELETE_LEAVE_REQUEST: {
        return {
          ...state,
          roomByIDRequest: true
        };
      }
      case DELETE_LEAVE_SUCCESS: {
        return initialState;
      }
      case DELETE_LEAVE_FAILED: {
        return { 
          ...state, 
          roomByIDFailed: action.payload, 
          roomByIDRequest: false 
        };
      }
      default: {
        return state;
      }
    }
  };