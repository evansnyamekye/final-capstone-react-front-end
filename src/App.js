import { Routes, Route } from 'react-router-dom';
import UserAuth from './Component/UserAuth';
import UserSignUp from './Component/UserSignUp';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserAuth />} />
          <Route path="/signup" element={<UserSignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
