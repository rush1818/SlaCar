import {merge} from 'lodash';
import {CHANNEL_CONSTANTS} from '../actions/channel_actions.js';
import {SESSION_CONSTANTS} from '../actions/session_actions.js';


const PrivateChannelReducer = (state = {}, action) => {
  switch(action.type){
      case CHANNEL_CONSTANTS.RECEIVE_ALL_PRIVATE_CHANNELS :
        let result1 = {};
        action.channels.forEach(channel=>{
          result1[channel.id] = channel;
        });
        return merge({}, state, result1 );
      case CHANNEL_CONSTANTS.RECEIVE_PRIVATE_CHANNEL:
        let newCh = action.channel;
        let newId = newCh.id;
        let returnCh = {[newId]: newCh};
        return merge({}, state, returnCh);
      case CHANNEL_CONSTANTS.REMOVE_SINGLE_CHANNEL:
        let newState2 = merge({}, state);
        if (newState2[action.channelId]){
          delete newState2[action.channelId];
        }
        return newState2;
      case SESSION_CONSTANTS.LOGOUT:
        return {};
      default:
        return state;
    }
};

export default PrivateChannelReducer;
