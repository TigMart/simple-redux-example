import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { editUser, getUser, loadUserThunk } from "./features/user/userSlice";
import { useEffect } from "react";

function App() {
  const name = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserThunk());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>{name}</h1>
      <input type="text" value={name} onChange={(event) => dispatch(editUser(event.target.value))} />
    </div>
  );
}

export default App;
