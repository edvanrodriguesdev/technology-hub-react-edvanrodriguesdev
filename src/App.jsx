import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { RoutesComponent } from './routes';
import { useNavigate } from "react-router-dom";



function App() {

const [user, setUser] = useState(null)
const navigate = useNavigate();

function userLogout() {
  localStorage.removeItem("@TOKEN");
  localStorage.removeItem("@USERID")
  setUser(null);
  navigate("/");
}

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        rtl={false}
        theme="light"
      />
      <RoutesComponent userLogout={userLogout} user={user} setUser={setUser} />
    </div>
  );
}

export default App;
