import React from 'react';
import { useSelector, useDispatch } from '../types';
import { getRooms, getRoomByID } from '../services/actions/rooms';
import { wsInitAction } from '../services/actions/ws-messages';
import { useParams, useHistory } from 'react-router';

import s from './Pages.module.css'
import Message from '../components/Message/Message';


function Room() {
  const dispatch = useDispatch()
  // const store = useSelector(store => store.rooms.roomsSuccess)
  const params: any = useParams()

  React.useEffect(()=>{
    // dispatch(getRooms())
    dispatch(getRoomByID())
    dispatch(wsInitAction())
  }, [dispatch])

  const user_test = {
    name: params.name
  }
  const test = {
    owner: params.name,
    created: "2021 August 04",
    users: [
      {
        name: "Sergo"
      },
      {
        name: "Lenka"
      }
    ],
    messages: [
      {
        name: "Sergo",
        text: "Hello, Lenka",
        date: "Wed Aug 04 2021"
      },
      {
        name: "Lenka",
        text: "Hi, Sergo",
        date: "19:04:02"
      },
      {
        name: "Friend",
        text: "Hi, all",
        date: "19:04:02"
      },
      {
        name: "Sergo",
        text: "Today, let's talk about us",
        date: "19:04:02"
      },
      {
        name: "Friend",
        text: "What' about us?",
        date: "19:04:02"
      },
      {
        name: "Lenka",
        text: "WHAT ABOUT US?",
        date: "19:04:02"
      },
      {
        name: "Lenka",
        text: "WHAT ABOUT US?",
        date: "19:04:02"
      },
      {
        name: "Lenka",
        text: "WHAT ABOUT US?",
        date: "19:04:02"
      },
      {
        name: "Lenka",
        text: "WHAT ABOUT US?",
        date: "19:04:02"
      },
      {
        name: "Lenka",
        text: "WHAT ABOUT US?",
        date: "19:04:02"
      },
      {
        name: "Lenka",
        text: "WHAT ABOUT US?",
        date: "19:04:02"
      },
    ]
  }
  const history = useHistory()

  const leaveRoom = () => {
    history.push(`/`,{name: user_test.name})
  }
  
  return (
    <div className={s.messenger}>
      
    <div className={s.chatUsers}>
      <div className={s.chatUsersWrapper}>
        {/* <input placeholder="Search" className={s.chatUsersSearch}/> */}
        {
          test.users && test.users.map((user) => (
            <p className={s.user}>{user.name}</p>
          ))
        }
      </div>
    </div>
      <div className={s.chatMain}>
        <div className={s.chatMainWrapper}>
          <div className={s.video}>
            <div>Video</div>
            <div className={s.controlBar}>
              <button 
                className={s.exitButton}
                onClick={leaveRoom}>
                  Exit
                </button>
              <button className={s.toogleMicButton}>Mic</button>
              <button className={s.toogleVideoButton}>Video</button>
            </div>
          </div>
        </div>
      </div>
    
      <div className={s.chatBox}>
        <div className={s.chatBoxWrapper}>
          <div className={s.chatBoxTop}>
              {
                test.messages && test.messages.map((message) => (
                  <Message message={message} own={(message.name === user_test.name) ? true : false}/>
                  ))
              }
          </div>
          <div className={s.chatBoxBottom}>
            <textarea className={s.chatMessageInput} placeholder="Share your thoughts..." />
            <button className={s.chatMessageSubmitButton}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
