import React from 'react';
import { useSelector, useDispatch } from '../types';
import { getRooms } from '../services/actions/rooms';
import { wsInitAction } from '../services/actions/ws-messages';

function Intro() {
  const dispatch = useDispatch()
  const store = useSelector(store => store.rooms.roomsSuccess)

  React.useEffect(()=>{
    dispatch(getRooms())
    dispatch(wsInitAction())
  }, [dispatch])
  console.log(store.length);
  
  return (
    <div>
      <div>
        <p>owner</p> 
        <div>
          {
            store.length && <span>{store[0].owner} </span>
          }
        </div>
      </div>
      <div>
        <p>participants</p> 
        <div>
          {
            store.length && store[0].participants.map((item: any) => {
              return (
                <>
                  <span>{item.name} </span>
                </>
              )
            })
          }
         
        </div>
      </div>
        <p>messages</p> 
        <div>
          {
            store.length && store[0].messages.map((item: any) => {
              return (
                <>
                  <span>{item.text} </span>
                </>
              )
            })
          }
        </div>
    </div>
  );
}

export default Intro;
