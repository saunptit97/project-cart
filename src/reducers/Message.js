import * as mess from "./../constants/Message";
import * as type from "./../constants/ActionType";
var initialState = mess.MSG_WELCOME;
const Message = (state = initialState, action) => {
  switch (action.type) {
    case type.CHANGE_MESSAGE:
      return action.message;
    default:
      return state;
  }
};
export default Message;
