export const todosReducer = (state = [], action) => {
  if (action.type === "add-todo") {
    // ...
  }
  return state;
};

export const initialTodos = [
  {
    id: Math.random(),
    text: "Learn Redux",
    isCompleted: false,
  },
  {
    id: Math.random(),
    text: "Learn React",
    isCompleted: false,
  },
  {
    id: Math.random(),
    text: "Learn JS",
    isCompleted: false,
  },
];
