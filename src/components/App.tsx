import { Route, Routes } from "react-router-dom"
import * as Pages from 'pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages.Main />} />
      <Route path="/lab" element={<Pages.Student />} />
    </Routes>
  );
};

export default App;