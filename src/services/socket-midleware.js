import { 
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_SEND_MESSAGE,
    wsGetMessageAction
} from "./actions/ws-messages"
import io  from 'socket.io-client'

export const socketMiddleware = () => {
    return store => {
        let socket = null;

        return next => action => {
            const { dispatch } = store;
            const { type, payload } = action;
            if (type === WS_CONNECTION_START) {
                // const wsUrl =  'ws://localhost:3001'
                // socket = new WebSocket(wsUrl);
                const wsUrl =  'ws://localhost:3001/'
                socket = io.connect(wsUrl);
                // socket = socketClient(wsUrl);
                
                
            }
            if (socket) {
                socket.onopen = event => {
                dispatch({ type: WS_CONNECTION_SUCCESS, payload: event });
            };

            socket.onerror = event => {
                dispatch({ type: WS_CONNECTION_ERROR, payload: event });
            };

            socket.onmessage = event => {
                const { data } = event;
                const parsedData = JSON.parse(data);
                const { success, ...restParsedData } = parsedData;

                dispatch(wsGetMessageAction(restParsedData));
            };

            socket.onclose = event => {
                dispatch({ type: WS_CONNECTION_CLOSED, payload: event });
            };

            if (type === WS_SEND_MESSAGE) {
                const message = { ...payload };
                socket.send(JSON.stringify(message));
            }
            }

            next(action);
        };
    };
};
