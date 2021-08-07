import { useRef, useState } from 'react';
// import VideoCall from './simple-peer';
// import io from 'socket.io-client';
import { getDisplayStream } from './media-access';

// import { useParams, useHistory } from 'react-router';
import s from './videoCall.module.css'

const Video = (props) => {
  const initialState = {
    localStream: {},
    remoteStreamUrl: '',
    streamUrl: '',
    initiator: false,
    peer: {},
    full: false,
    connecting: false,
    waiting: true,
    micState:true,
    camState:true,
  };
  const [state, setState] = useState(initialState)
  // const videoCall = new VideoCall();
  // const params = useParams()
  let localVideoRef = useRef(null)
  let remoteVideoRef = useRef(null)

  // useEffect(()=>{
  //   const wsUrl =  'ws://localhost:3001/'
  //   const socket = io(wsUrl);
  //   const component = this;
  //   setState({ socket });
  //   const { name } = params;
  //   console.log(name);
  //   getUserMedia().then(() => {
  //     // socket.emit('join', { roomId: name });
  //   });

  //   socket.on('init', () => {
  //     component.setState({ initiator: true });
  //   });
  //   socket.on('ready', () => {
  //     component.enter(name);
  //   });
  //   socket.on('desc', data => {
  //     if (data.type === 'offer' && component.state.initiator) return;
  //     if (data.type === 'answer' && !component.state.initiator) return;
  //     component.call(data);
  //   });
  //   socket.on('disconnected', () => {
  //     component.setState({ initiator: true });
  //   });
  //   socket.on('full', () => {
  //     component.setState({ full: true });
  //   });

  // }, [])



  function getUserMedia(cb) {
    return new Promise((resolve, reject) => {
      navigator.getUserMedia = navigator.getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;
      const op = {
        video: true,
        audio: true
      };
      navigator.getUserMedia(
        op,
        stream => {
          setState({ streamUrl: stream, localStream: stream });
          if (localVideoRef) {
            localVideoRef.current.srcObject = stream;
          }
          resolve();
        },
        () => {}
      );
    });
  }

  function setAudioLocal(){
    if(state.localStream.getAudioTracks().length>0){
      state.localStream.getAudioTracks().forEach(track => {
        track.enabled=!track.enabled;
      });
    }
    setState({
      micState:!state.micState
    })
  }

  function setVideoLocal(){
    if(state.localStream.getVideoTracks().length>0){
      state.localStream.getVideoTracks().forEach(track => {
        track.enabled=!track.enabled;
      });
    }
    setState({
      camState:!state.camState
    })
  }

  function getDisplay() {
    getDisplayStream().then(stream => {
      stream.oninactive = () => {
        state.peer.removeStream(state.localStream);
        getUserMedia().then(() => {
          state.peer.addStream(state.localStream);
        });
      };
      setState({ streamUrl: stream, localStream: stream });
      localVideoRef.current.srcObject = stream;
      state.peer.addStream(stream);
    });
  }

  // const enter = name => {
  //   setState({ connecting: true });
  //   const peer = videoCall.init(
  //     state.localStream,
  //     state.initiator
  //   );
  //   setState({ peer });

  //   peer.on('signal', data => {
  //     const signal = {
  //       room: name,
  //       desc: data
  //     };
  //     state.socket.emit('signal', signal);
  //   });
  //   peer.on('stream', stream => {
  //     remoteVideoRef.srcObject = stream;
  //     setState({ connecting: false, waiting: false });
  //   });
  //   peer.on('error', function(err) {
  //     console.log(err);
  //   });
  // };

  // const call = otherId => {
  //   videoCall.connect(otherId);
  // };
  // const renderFull = () => {
  //   if (state.full) {
  //     return 'The room is full';
  //   }
  // };
  
    return (
      <>
        <video
          autoPlay
          id='localVideo'
          muted
          ref={localVideoRef}
          className={s.video}
        />

        <div className={`${state.connecting || state.waiting ? 'hide' : ''} ${s.videoRemoteContainer}`}>

        <video
            autoPlay
            id='remoteVideo'
            ref={remoteVideoRef}
            className={s.videoRemote}
          />
          <video
            autoPlay
            id='remoteVideo'
            ref={remoteVideoRef}
            className={s.videoRemote}
          />
          <video
            autoPlay
            id='remoteVideo'
            ref={remoteVideoRef}
            className={s.videoRemote}
          />

        </div>

        <div className={s.controlBar}>
          <button 
            className={s.exitButton}
            onClick={props.leaveRoom}>
              Exit
            </button>
          <button className={state.micState ? `${s.toogleMicButton} ${s.pressed}` : s.toogleMicButton}
            onClick={() => {
              setAudioLocal();
            }}>Mic</button>
          <button className={state.camState ? `${s.toogleVideoButton} ${s.pressed}` : s.toogleVideoButton}
            onClick={() => {
              setVideoLocal();
            }}>Video</button>
          <button className={s.toogleVideoButton}
            onClick={() => {
              getDisplay();
            }}>Share</button>
        </div>
        
         <div className='controls'>
          {/* <button
            className='control-btn'
            onClick={() => {
              getDisplay();
            }}
          >
            <div>ShareScreenIcon</div>
          </button>


          <button
          className='control-btn'
            onClick={() => {
              setAudioLocal();
            }}
          >
            {
              state.micState?(
                <div>MicOnIcon</div>
              ):(
                <div>MicOffIcon</div>
              )
            }
          </button>

          <button
          className='control-btn'
            onClick={() => {
              setVideoLocal();
            }}
          >
            {
              state.camState?(
                <div>CamOnIcon</div>
              ):(
                <div>CamOffIcon</div>
              )
            }
          </button> */}
        
        
{/* 

        {state.connecting && (
          <div className='status'>
            <p>Establishing connection...</p>
          </div>
        )}
        {state.waiting && (
          <div className='status'>
            <p>Waiting for someone...</p>
          </div>
        )}
        {renderFull()} */}
      </div>
      </>
    );
}

export default Video;