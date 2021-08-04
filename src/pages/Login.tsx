import React from 'react';
import { useSelector, useDispatch } from '../types';
import { postCreateRoom } from '../services/actions/rooms';
import { wsInitAction } from '../services/actions/ws-messages';
import { useHistory } from 'react-router';
import s from './Pages.module.css'

function Login() {
  const [name, setName] = React.useState('')
  const history: any = useHistory()

  React.useEffect(()=>{
  if (history.location.state?.name) {
    setName(history.location.state?.name)
  }
  }, [history])
  
  const dispatch = useDispatch()

  const onSubmit = (e:any) => {
    e.preventDefault()
    dispatch(postCreateRoom(name))
    history.push(`/${name}`,{owner: true})
  }
  const onChange = (e:any) => {
    setName(e.target.value)
  }
  
  return (
    <div className={s.login}>
        <form onSubmit={(e)=>onSubmit(e)} className={s.card}>
          <span className={s.label}>Enter your name</span>
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
