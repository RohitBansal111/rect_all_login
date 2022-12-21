import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import DonePage from "./DonePage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage/>} />
          <Route exact path="/done" element={<DonePage/>} />
          <Route exact path="*" element={<h2>jdjdfjfjfjfj</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
