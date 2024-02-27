import { Routes, Route } from 'react-router-dom';
import UserAuth from './Component/UserAuth';
import UserSignUp from './Component/UserSignUp';

function App() {
  return (
    <>
      <div className="App">
        <UserAuth />
      </div>
      <Routes>
        <Route path="/signup" element={<UserSignUp />} />
      </Routes>
    </>
  );
}

export default App;
