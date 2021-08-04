import { getCookie } from './utils';

const _apiBase = 'http://localhost:3001/api'

export const getRoomsRequest = async () => {
  const res = await getResourceRaw(`/rooms`);
  return res;
};
export const postRoomsRequest = async (name) => {
  const res = await postResourceRaw(`/rooms?name=${name}`);
  return res;
};


const getResourceRaw = async (url) => {
  const res = await fetch(`${_apiBase}${url}`, {
    method: 'GET',
  });
  if (!res.ok) {
    throw new Error(`Could not fetch '${url}', received '${res.status}'`)
  }
  return await res.json();
};

const getResource = async (url, token) => {
  const res = await fetch(`${_apiBase}${url}`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    // body: JSON.stringify({ token: token })
  });
  if (!res.ok) {
    throw new Error(`Could not fetch '${url}', received '${res.status}'`)
  }
  return await res.json();
};

const postResourceRaw = async (url, data={}) => {
  const addData =  {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  }
  const res = await fetch(
    `${_apiBase}${url}`, 
    addData
  )
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}` +
      `, received ${res.status}`)
  }
  return await res.json();
};
const postResource = async (url, token, data=null) => {
  let addData
  if (data) {
    addData = {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body:JSON.stringify({...data, token:token})
    }
  } else {
    addData = {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({token:token})
    }

  }
  const res = await fetch(
    `${_apiBase}${url}`, 
    addData
  )
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}` +
      `, received ${res.status}`)
  }
  return await res.json();
};
const patchResource = async (url, token, data={}) => {
  const addData = {
    method:'PATCH',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  }
  const res = await fetch(
    `${_apiBase}${url}`, 
    addData
  )
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}` +
      `, received ${res.status}`)
  }
  return await res.json();
};