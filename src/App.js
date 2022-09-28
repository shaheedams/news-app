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
            <Route
              exact
              path="/news-app/general"
              element={<News cat="general" />}
            />
            <Route
              path="/news-app/entertainment"
              element={<News cat="entertainment" />}
            />
            <Route
              path="/news-app/business"
              element={<News cat="business" />}
            />
            <Route path="/news-app/health" element={<News cat="health" />} />
            <Route path="/news-app/science" element={<News cat="science" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
