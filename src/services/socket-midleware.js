import { 
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_SEND_MESSAGE,
    wsGetMessageAction
} from "./actions/rooms"
import io  from 'socket.io-client'

export const socketMiddleware = () => {
    return store => {
        let socketio = null;

        return next => action => {
            const { dispatch } = store;
            const { type, payload } = action;
            if (type === WS_CONNECTION_START) {
                const wsUrl =  'ws://localhost:3001/'
                socketio = io.connect(wsUrl);
                
            }
            if (socketio) {
                socketio.on('connection', data => {
                    dispatch({ type: WS_CONNECTION_SUCCESS, payload: data });
                })
                socketio.once('message_new_to_client', data => {
                    dispatch(wsGetMessageAction(data));
                })
                if (type === WS_SEND_MESSAGE) {
                    const message = payload;
                    socketio.emit('message_new', message)
                }
            }

            next(action);
        };
    };
};
