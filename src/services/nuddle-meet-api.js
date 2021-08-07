const _apiBase = 'http://localhost:3001/api'

export const getRoomsRequest = async () => {
  const res = await getResourceRaw(`/rooms`);
  return res;
};
export const postRoomsRequest = async (name) => {
  const res = await postResourceRaw(`/rooms?name=${name}`);
  return res;
};
export const getRoomByIDRequest = async (name) => {
  const res = await getResourceRaw(`/rooms/${name}`);
  return res;
};
export const deleteUserRequest = async (name) => {
  const res = await deleteResourceRaw(`/rooms/${name}`);
  return res;
};
const deleteResourceRaw = async (url) => {
  const res = await fetch(`${_apiBase}${url}`, {
    method: 'DELETE',
  });
  if (!res.ok) {
    throw new Error(`Could not fetch '${url}', received '${res.status}'`)
  }
  return await res.json();
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