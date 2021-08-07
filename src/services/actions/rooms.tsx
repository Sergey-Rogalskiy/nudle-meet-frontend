import { 
    getRoomsRequest,
    postRoomsRequest, 
    getRoomByIDRequest,
    deleteUserRequest
} from '../nuddle-meet-api';
import { AppThunk, AppDispatch } from '../../types';
export const GET_ROOMS_REQUEST:'GET_ROOMS_REQUEST' = 'GET_ROOMS_REQUEST';
export const GET_ROOMS_SUCCESS:'GET_ITEMSROOMS_SUCCESS' = 'GET_ITEMSROOMS_SUCCESS';
export const GET_ROOMS_FAILED:'GET_ROOMS_FAILED' = 'GET_ROOMS_FAILED';

export const POST_ROOMS_REQUEST:'POST_ROOMS_REQUEST' = 'POST_ROOMS_REQUEST';
export const POST_ROOMS_SUCCESS:'POST_ROOMS_SUCCESS' = 'POST_ROOMS_SUCCESS';
export const POST_ROOMS_FAILED:'POST_ROOMS_FAILED' = 'POST_ROOMS_FAILED';

export const GET_ROOM_BY_ID_REQUEST:'GET_ROOM_BY_ID_REQUEST' = 'GET_ROOM_BY_ID_REQUEST';
export const GET_ROOM_BY_ID_SUCCESS:'GET_ROOM_BY_ID_SUCCESS' = 'GET_ROOM_BY_ID_SUCCESS';
export const GET_ROOM_BY_ID_FAILED:'GET_ROOM_BY_ID_FAILED' = 'GET_ROOM_BY_ID_FAILED';

export const WS_CONNECTION_START:'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS:'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR:'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_GET_MESSAGE:'WS_GET_MESSAGE' = 'WS_GET_MESSAGE';
export const WS_SEND_MESSAGE:'WS_SEND_MESSAGE' = 'WS_SEND_MESSAGE';
export const WS_CONNECTION_CLOSED:'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';

export const SET_USER_SUCCESS:'SET_USER_SUCCESS' = 'SET_USER_SUCCESS';

export const DELETE_LEAVE_REQUEST:'DELETE_LEAVE_REQUEST' = 'DELETE_LEAVE_REQUEST';
export const DELETE_LEAVE_SUCCESS:'DELETE_LEAVE_SUCCESS' = 'DELETE_LEAVE_SUCCESS';
export const DELETE_LEAVE_FAILED:'DELETE_LEAVE_FAILED' = 'DELETE_LEAVE_FAILED';


export interface IWsInitAction {
  readonly type: typeof WS_CONNECTION_START;
}

export interface IWsConnectionSuccessAction {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWsConnectionFailedAction {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: any;
}

export interface IWsGetMessageAction {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: any;
}

export interface IWsSendMessageAction {
  readonly type: typeof WS_SEND_MESSAGE;
  readonly payload: any;
}

export interface IWsConnectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
}


export interface IGetRoomsRequestAction {
  readonly type: typeof GET_ROOMS_REQUEST;
}

export interface IGetRoomsFailedAction {
  readonly type: typeof GET_ROOMS_FAILED ;
  readonly payload: any
}

export interface IGetRoomsSuccessAction {
  readonly type: typeof GET_ROOMS_SUCCESS;
  readonly payload: any;
}
export interface IPostRoomsRequestAction {
  readonly type: typeof POST_ROOMS_REQUEST;
}

export interface IPostRoomsFailedAction {
  readonly type: typeof POST_ROOMS_FAILED ;
  readonly payload: any
}

export interface IPostRoomsSuccessAction {
  readonly type: typeof POST_ROOMS_SUCCESS;
  readonly payload: any;
}
export interface IGetRoomByIDRequestAction {
  readonly type: typeof GET_ROOM_BY_ID_REQUEST;
}

export interface IGetRoomByIDFailedAction {
  readonly type: typeof GET_ROOM_BY_ID_FAILED ;
  readonly payload: any
}

export interface IGetRoomByIDSuccessAction {
  readonly type: typeof GET_ROOM_BY_ID_SUCCESS;
  readonly payload: any;
}

export interface ISetUserSuccessAction {
  readonly type: typeof SET_USER_SUCCESS;
  readonly payload: any;
}
export interface IDeleteLeaveRequestAction {
  readonly type: typeof DELETE_LEAVE_REQUEST;
}

export interface IDeleteLeaveFailedAction {
  readonly type: typeof DELETE_LEAVE_FAILED ;
  readonly payload: any
}

export interface IDeleteLeaveSuccessAction {
  readonly type: typeof DELETE_LEAVE_SUCCESS;
  readonly payload: any;
}


export type TRoomsActions = 
IGetRoomsRequestAction |
IGetRoomsFailedAction |
IGetRoomsSuccessAction | 
IPostRoomsRequestAction |
IPostRoomsFailedAction |
IPostRoomsSuccessAction|
IGetRoomByIDRequestAction |
IGetRoomByIDFailedAction |
IGetRoomByIDSuccessAction |
IWsInitAction |
IWsConnectionSuccessAction |
IWsConnectionFailedAction |
IWsGetMessageAction |
IWsSendMessageAction |
IWsConnectionClosedAction |
ISetUserSuccessAction |
IDeleteLeaveRequestAction |
IDeleteLeaveFailedAction |
IDeleteLeaveSuccessAction ;

export const wsInitAction = (): IWsInitAction => ({
  type: WS_CONNECTION_START
});

export const wsConnectionSuccessAction = (): IWsConnectionSuccessAction => ({
  type: WS_CONNECTION_SUCCESS
});

export const wsConnectionFailedAction = (payload:any): IWsConnectionFailedAction => ({
  type: WS_CONNECTION_ERROR,
  payload: payload
});

export const wsGetMessageAction = (payload:any): IWsGetMessageAction => ({
  type: WS_GET_MESSAGE,
  payload: payload
});

export const wsSendMessageAction = (payload:any): IWsSendMessageAction => ({
  type: WS_SEND_MESSAGE,
  payload: payload

});

export const wsConnectionClosedAction = (): IWsConnectionClosedAction => ({
  type: WS_CONNECTION_CLOSED
});

export const getRoomsAction = (): IGetRoomsRequestAction => ({
  type: GET_ROOMS_REQUEST
});

export const getRoomsFailedAction = (res: any): IGetRoomsFailedAction => ({
  type: GET_ROOMS_FAILED,
  payload: res
});

export const getRoomsSuccessAction = (res:any): IGetRoomsSuccessAction => ({
  type: GET_ROOMS_SUCCESS,
  payload: res
});
export const getRoomByIDAction = (): IGetRoomByIDRequestAction => ({
  type: GET_ROOM_BY_ID_REQUEST
});

export const getRoomByIDFailedAction = (res: any): IGetRoomByIDFailedAction => ({
  type: GET_ROOM_BY_ID_FAILED,
  payload: res
});

export const getRoomByIDSuccessAction = (res:any): IGetRoomByIDSuccessAction => ({
  type: GET_ROOM_BY_ID_SUCCESS,
  payload: res
});

export const postRoomsAction = (): IPostRoomsRequestAction => ({
  type: POST_ROOMS_REQUEST
});

export const postRoomsFailedAction = (res: any): IPostRoomsFailedAction => ({
  type: POST_ROOMS_FAILED,
  payload: res
});

export const postRoomsSuccessAction = (res:any): IPostRoomsSuccessAction => ({
  type: POST_ROOMS_SUCCESS,
  payload: res
});

export const setUserSuccessAction = (res:any): ISetUserSuccessAction => ({
  type: SET_USER_SUCCESS,
  payload: res
});

export const deleteLeaveAction = (payload: any): IDeleteLeaveRequestAction => ({
  type: DELETE_LEAVE_REQUEST
});

export const deleteLeaveFailedAction = (res: any): IDeleteLeaveFailedAction => ({
  type: DELETE_LEAVE_FAILED,
  payload: res
});

export const deleteLeaveSuccessAction = (res:any): IDeleteLeaveSuccessAction => ({
  type: DELETE_LEAVE_SUCCESS,
  payload: res
});



export const deleteLeave: AppThunk = (payload: any) => (dispatch: AppDispatch) => {
  dispatch(deleteLeaveAction(payload));
  deleteUserRequest(payload)
  .then(res => {
    if (res && res.success) {
      dispatch(deleteLeaveSuccessAction(res));
    } else {
      dispatch(deleteLeaveFailedAction(res.reason));
    }
  })
  .catch(err => {
      dispatch(deleteLeaveFailedAction(err));
  })
}
export const getRooms: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(getRoomsAction());
  getRoomsRequest()
  .then(res => {
    if (res && res.success) {
      dispatch(getRoomsSuccessAction(res));
    } else {
      dispatch(getRoomsFailedAction(res.reason));
    }
  })
  .catch(err => {
      dispatch(getRoomsFailedAction(err));
  })
}

export const postCreateRoom: AppThunk = (name:any) => (dispatch: AppDispatch) => {
  dispatch(postRoomsAction());
  postRoomsRequest(name)
  .then(res => {
    if (res && res.success) {
      dispatch(postRoomsSuccessAction(res));
    } else {
      dispatch(postRoomsFailedAction(res.reason));
    }
  })
  .catch(err => {
      dispatch(postRoomsFailedAction(err));
  })
}


export const getRoomByID: AppThunk = (name: string) => (dispatch: AppDispatch) => {
  dispatch(getRoomByIDAction());
  getRoomByIDRequest(name)
  .then(res => {
    if (res && res.success) {
      dispatch(getRoomByIDSuccessAction(res));
    } else {
      dispatch(getRoomByIDFailedAction('Some error'));
    }
  })
  .catch(err => {
      dispatch(getRoomByIDFailedAction(err));
  })
}