import { 
    getRoomsRequest, 
} from '../nuddle-meet-api';
import { AppThunk, AppDispatch } from '../../types';
export const GET_ROOMS_REQUEST:'GET_ROOMS_REQUEST' = 'GET_ROOMS_REQUEST';
export const GET_ROOMS_SUCCESS:'GET_ITEMSROOMS_SUCCESS' = 'GET_ITEMSROOMS_SUCCESS';
export const GET_ROOMS_FAILED:'GET_ROOMS_FAILED' = 'GET_ROOMS_FAILED';


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


export type TRoomsActions = 
IGetRoomsRequestAction |
IGetRoomsFailedAction |
IGetRoomsSuccessAction;

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
