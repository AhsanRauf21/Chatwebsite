import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LeftHome from "./components/left/LeftHome";
import RightHome from "./components/Right/RightHome";
import Register from "./pages/Register";
import LoginPage from "./pages/LoginPage";
import {  useMainContext } from "./context/maincontext";
import useConversation from "./zustand/useConversation.js";
import NotSelected from "./components/NotSelected.jsx";

const App = () => {

const {user} = useMainContext()
const {selectedConvo} = useConversation()

  return (
    <>
          <Routes>
            <Route
              path="/"
              element={
                user ?
                <div className="flex min-h-screen">
                    <LeftHome />
{
  selectedConvo ? <RightHome /> : <NotSelected/>
}
                  
                  </div> :
                <Navigate to={"/login"} /> 
                
              }
              />
            <Route path="/login" element={user? <Navigate to={"/"} /> : <LoginPage/>   } />
            <Route path="/register" element={user? <Navigate to={"/"} /> : <Register/>   } />
          </Routes>
    </>
  );
};

export default App;
