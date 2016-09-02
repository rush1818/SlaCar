import {merge} from 'lodash';
import {CHANNEL_CONSTANTS} from '../actions/channel_actions.js';

// const defaultState = {
//   id: {
//     id: 1,
//     name: "",
//     private: true
//   }
// };

const ChannelReducer = (state = {}, action) => {
  switch(action.type){
      case CHANNEL_CONSTANTS.RECEIVE_ALL_SUB_CHANNELS :
        let result1 = {};
        action.channels.forEach(channel=>{
          result1[channel.id] = channel;
        });
        return merge({}, state, result1 );
      default:
        return state;
    }
};

export default ChannelReducer;