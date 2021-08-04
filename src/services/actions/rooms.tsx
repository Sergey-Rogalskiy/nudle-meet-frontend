import { 
    getRoomsRequest,
    postRoomsRequest, 
} from '../nuddle-meet-api';
import { AppThunk, AppDispatch } from '../../types';
export const GET_ROOMS_REQUEST:'GET_ROOMS_REQUEST' = 'GET_ROOMS_REQUEST';
export const GET_ROOMS_SUCCESS:'GET_ITEMSROOMS_SUCCESS' = 'GET_ITEMSROOMS_SUCCESS';
export const GET_ROOMS_FAILED:'GET_ROOMS_FAILED' = 'GET_ROOMS_FAILED';

export const POST_ROOMS_REQUEST:'POST_ROOMS_REQUEST' = 'POST_ROOMS_REQUEST';
export const POST_ROOMS_SUCCESS:'POST_ROOMS_SUCCESS' = 'POST_ROOMS_SUCCESS';
export const POST_ROOMS_FAILED:'POST_ROOMS_FAILED' = 'POST_ROOMS_FAILED';


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


export type TRoomsActions = 
IGetRoomsRequestAction |
IGetRoomsFailedAction |
IGetRoomsSuccessAction | 
IPostRoomsRequestAction |
IPostRoomsFailedAction |
IPostRoomsSuccessAction;

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



export const getRooms: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(getRoomsAction());
  getRoomsRequest()
  .then(res => {
    if (res && res.success) {
      dispatch(getRoomsSuccessAction(res));
    } else {
      dispatch(getRoomsFailedAction('Some error'));
    }
  })
  .catch(err => {
    console.log(err);
      dispatch(getRoomsFailedAction(err));
  })
}

export const postCreateRoom: AppThunk = (name:any) => (dispatch: AppDispatch) => {
  dispatch(postRoomsAction());
  postRoomsRequest(name)
  .then(res => {
    if (res && res.success) {
      console.log(res);
      dispatch(postRoomsSuccessAction(res));
    } else {
      dispatch(postRoomsFailedAction('Some error'));
    }
  })
  .catch(err => {
    console.log(err);
      dispatch(postRoomsFailedAction(err));
  })
}


export const getRoomByID: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(getRoomsAction());
  getRoomsRequest()
  .then(res => {
    if (res && res.success) {
      dispatch(getRoomsSuccessAction(res));
    } else {
      dispatch(getRoomsFailedAction('Some error'));
    }
  })
  .catch(err => {
    console.log(err);
      dispatch(getRoomsFailedAction(err));
  })
}