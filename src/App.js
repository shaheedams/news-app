import Header from './components/Header';
import News from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<News cat="general" />} />
            <Route
              
              path="/entertainment"
              element={<News cat="entertainment" />}
            />
            <Route  path="/business" element={<News cat="business" />} />
            <Route  path="/health" element={<News cat="health" />} />
            <Route  path="/science" element={<News cat="science" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
