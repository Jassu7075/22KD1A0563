import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { initializeLogger, Log } from '../../Logging Middleware/logger';
import UrlShortenerPage from './UrlShortenerPage';
import StatisticsPage from './StatisticsPage';
import RedirectHandler from './RedirectHandler';

function App() {
  useEffect(() => {
    const init = async () => {
      await initializeLogger();
      Log("frontend", "info", "app", "Application has started successfully.");
    };
    init();
  }, []);

  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>URL Shortener</Link>
        <Link to="/stats">Statistics</Link>
      </nav>
      <Routes>
        <Route path="/" element={<UrlShortenerPage />} />
        <Route path="/stats" element={<StatisticsPage />} />
        <Route path="/:shortCode" element={<RedirectHandler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;