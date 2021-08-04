import React from 'react';
import { useSelector, useDispatch } from '../types';
import { postCreateRoom } from '../services/actions/rooms';
import { wsInitAction } from '../services/actions/ws-messages';
import { useHistory } from 'react-router';

function Login() {
  const [name, setName] = React.useState('')
  const history = useHistory()
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
    <div>
      <form onSubmit={(e)=>onSubmit(e)}>
        <span>Enter your name</span>
        <input 
          type='text'
          placeholder='Name'
          value={name}
          name={'name'}
          onChange={(e)=>{onChange(e)}}/>
        <button>Create a nudle</button>
      </form>
    </div>
  );
}

export default Login;
