export const friendsReducer = (state = [], action) => {
  if (action.type === "add-friend") {
    // ...
  }
  return state;
};

export const initialfriends = [
  {
    id: Math.random(),
    FullName: "John Smith",
  },
  {
    id: Math.random(),
    FullName: "Joe Gatto",
  },
];
