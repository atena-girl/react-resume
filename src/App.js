import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from "components/Content";
import NotFound from "components/NotFound";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Content />}></Route>
              <Route path="*" element={<NotFound />}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
