import { AppThunk, AppDispatch, TWsGetMessage } from '../../types';

export const WS_CONNECTION_START:'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS:'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR:'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_GET_MESSAGE:'WS_GET_MESSAGE' = 'WS_GET_MESSAGE';
export const WS_SEND_MESSAGE:'WS_SEND_MESSAGE' = 'WS_SEND_MESSAGE';
export const WS_CONNECTION_CLOSED:'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';

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
}

export interface IWsConnectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
}


export type TFeedActions = 
IWsInitAction |
IWsConnectionSuccessAction |
IWsConnectionFailedAction |
IWsGetMessageAction |
IWsSendMessageAction |
IWsConnectionClosedAction;

export const wsInitAction = (): IWsInitAction => ({
  type: WS_CONNECTION_START
});

export const wsConnectionSuccessAction = (): IWsConnectionSuccessAction => ({
  type: WS_CONNECTION_SUCCESS
});

export const wsConnectionFailedAction = (payload:TWsGetMessage): IWsConnectionFailedAction => ({
  type: WS_CONNECTION_ERROR,
  payload: payload
});

export const wsGetMessageAction = (payload:TWsGetMessage): IWsGetMessageAction => ({
  type: WS_GET_MESSAGE,
  payload: payload
});

export const wsSendMessageAction = (): IWsSendMessageAction => ({
  type: WS_SEND_MESSAGE
});

export const wsConnectionClosedAction = (): IWsConnectionClosedAction => ({
  type: WS_CONNECTION_CLOSED
});