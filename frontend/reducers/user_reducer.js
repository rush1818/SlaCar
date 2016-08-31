import {merge} from 'lodash';
import {USER_CONSTANTS} from '../actions/user_actions.js';


const UserReducer = (state = {}, action) => {
  switch(action.type){
      case USER_CONSTANTS.RECEIVE_USERS :
        let newUsers = {};
        let keys = Object.keys(action.users);
        action.users.forEach(user=>{
          newUsers[user.id] = user;
        });
        return merge({}, state, newUsers );
      default:
        return state;
    }
};

export default UserReducer;
