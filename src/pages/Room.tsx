import React from 'react';
import { useSelector, useDispatch } from '../types';
import { getRooms, getRoomByID } from '../services/actions/rooms';
import { useParams, useHistory } from 'react-router';
import { wsSendMessageAction } from '../services/actions/rooms';
import { deleteLeave } from '../services/actions/rooms';
import { useRef } from 'react';
import VideoCall from '../components/VideoCall';

import s from './Pages.module.css'
import Message from '../components/Message/Message';
import { setTimeout } from 'timers';


function Room() {
  const dispatch = useDispatch()
  const test = useSelector(store => store.rooms.roomByIDSuccess)
  const user = useSelector(store => store.rooms.user)
  const rooms = useSelector(store => store.rooms.roomsSuccess)
  const params: any = useParams()

  const messageBoxRef: any = useRef(null)
  const messageInputRef: any = useRef(null)

  React.useEffect(()=>{
    dispatch(getRooms())
    dispatch(getRoomByID(params.name))
  }, [dispatch, params.name])

  React.useEffect(()=>{
    messageInputRef && messageInputRef.current.focus()
    setTimeout(()=>{
      messageBoxRef && messageBoxRef.current.scrollIntoView()
    }, 1)
  })
  

  const history = useHistory()

  const leaveRoom = () => {
    dispatch(deleteLeave(params.name))
    history.push(`/`,{name: params.name})
  }

  const [messageText, setMessageText] = React.useState('')
  
  const onSubmit = (e:any) => {
    e.preventDefault()
    const payload = {room:params.name, user: user, messageText}
    dispatch(wsSendMessageAction(payload))
    setMessageText('')
    
  }
  const onChange = (e:any) => {
    setMessageText(e.target.value)
  }

  if (!user) {
    leaveRoom()
  }

  return (
    <div className={s.messenger}>
    


    <div className={s.chatUsers}>
      <div className={s.chatUsersWrapper}>
      <p>Rooms</p>
      {/* <input placeholder="Search" className={s.chatUsersSearch}/> */}
        
        {
          rooms && rooms.map((room: any) => (
            <p key={room.owner} className={s.user}
              onClick={()=>{history.push(`/${room.owner}`)}}>
                {room.owner}
            </p>
          ))
        }
      </div>
    </div>
    
      
    <div className={s.chatUsers}>
      <div className={s.chatUsersWrapper}>
      <p>Users</p>
        {/* <input placeholder="Search" className={s.chatUsersSearch}/> */}
        {
          test.users && test.users.map((user: any) => (
            <p key={user.name} className={s.user}>{user.name}</p>
          ))
        }
      </div>
    </div>

      <div className={s.chatMain}>
        <div className={s.chatMainWrapper}>
          <div className={s.streamVIdeo}>
            
              <VideoCall leaveRoom={leaveRoom}/>
            

          </div>
        </div>
      </div>

      <div className={s.chatBox}>
        <div className={s.chatBoxWrapper}>
          <div className={s.chatBoxTop}>
              {
                test.messages && test.messages.map((message: any) => (
                  <Message message={message} own={(message?.user === user) ? true : false}/>
                  ))
              }
              <div ref={messageBoxRef}></div>
          </div>
          <form className={s.chatBoxBottom}
            onSubmit={(e) => {onSubmit(e)}}>
            <textarea 
              ref={messageInputRef}
              className={s.chatMessageInput} 
              placeholder="Share your thoughts..." 
              value={messageText}
              name={'messageText'}
              onChange={(e)=>{onChange(e)}}/>
            <button 
              className={s.chatMessageSubmitButton}>
                Share
              </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Room;
