import React from 'react';
import { Switch, Route } from 'react-router';
import { Room, Login } from '../../pages';
import s from './Message.module.css';

function Message(props: any) {
  return (
    <div className={`${s.message} ${props.own ? s.own : ''}`}>
      <div className={s.top}>
        <span className={s.name}>{props.message.name}</span>
        <span className={s.date}>{props.message.date}</span>
      </div>
      <div className={s.bottom}>
        <p className={s.text}>{props.message.text}</p>
      </div>
    </div>
  );
}

export default Message;
