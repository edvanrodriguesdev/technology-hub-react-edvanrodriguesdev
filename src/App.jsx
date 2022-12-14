import { RoutesComponent } from '../src/routes/routes';
import { UserProvider } from "./provides/UserContext";




function App() {

  return (
    <div className="App">
      <UserProvider>
      <RoutesComponent />
      </UserProvider>
    </div>
  );
}

export default App;

