import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { initialTodos, todosReducer } from "../features/todos/todos";
import { iniialUser, userReducer } from "../features/user/userSlice";
import { friendsReducer, initialfriends } from "../features/friends/friendsSlice";
import { thunk } from "redux-thunk";

// // middleware 1
// function logger(store) {
//   return function (next) {
//     return function (action) {
//       action.payload.name += "o";
//       return next(action);
//     };
//   };
// }
// // middleware 2
// const logger2 = (store) => (next) => (action) => {
//   action.payload.name += "k";
//   return next(action);
// };

const store = createStore(
  combineReducers({
    todos: todosReducer,
    user: userReducer,
    friends: friendsReducer,
  }),
  { friends: initialfriends, todos: initialTodos, user: iniialUser },
  //   applyMiddleware(logger, logger2)
  applyMiddleware(thunk)
);

export default store;
