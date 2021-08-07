import React from 'react';
import { useSelector, useDispatch } from '../types';
import { postCreateRoom } from '../services/actions/rooms';
import { useHistory } from 'react-router';
import s from './Pages.module.css'

function Login() {
  const [name, setName] = React.useState('')
  const history: any = useHistory()
  const room = useSelector(store => store.rooms.roomSuccess)
  const failed = useSelector(store => store.rooms.roomFailed)

  React.useEffect(()=>{
  if (history.location.state?.name) {
    setName(history.location.state?.name)
  }
  }, [history])
  
  const dispatch = useDispatch()

  const onSubmit = (e:any) => {
    e.preventDefault()
    dispatch(postCreateRoom(name))
  }
  const onChange = (e:any) => {
    setName(e.target.value)
  }

  if (room?.owner) {
    
    history.push(`/${name}`,{owner: true})
  }

  
  return (
    <div className={s.login}>
        <form onSubmit={(e)=>onSubmit(e)} className={s.card}>
          {
            failed ? (
              <span className={`${s.label} ${s.error}`}>{failed}</span>
            ) : (
              <span className={`${s.label}`}>Enter your name</span>
            )
            
          }
          <input 
            type='text'
            placeholder='Name'
            value={name}
            name={'name'}
            onChange={(e)=>{onChange(e)}}
            className={s.cardInput}/>
          <button className={s.cardButton}>Create a nudle</button>
        </form>
    </div>
  );
}

export default Login;
