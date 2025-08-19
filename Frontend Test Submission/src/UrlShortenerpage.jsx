import React, { useState } from 'react';
import { Log } from '../../Logging Middleware/logger';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function UrlShortenerPage() {
  const [longUrl, setLongUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    Log("frontend", "info", "component", `Submit clicked for URL: ${longUrl}`);

    if (!longUrl.startsWith('http')) {
      setMessage("Error: Please enter a valid URL starting with http.");
      Log("frontend", "warn", "validation", "Invalid URL entered.");
      return;
    }

    const allLinks = JSON.parse(localStorage.getItem('links')) || [];

    const shortCode = Math.random().toString(36).substring(2, 8);
    const newLink = {
      shortCode: shortCode,
      longUrl: longUrl,
      createdAt: new Date().toISOString()
    };

    const updatedLinks = [...allLinks, newLink];
    localStorage.setItem('links', JSON.stringify(updatedLinks));

    Log("frontend", "info", "state", `New link saved with code: ${shortCode}`);

    const fullShortUrl = `${window.location.origin}/${shortCode}`;
    setMessage(`Success! Your link is: ${fullShortUrl}`);
    setLongUrl('');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>URL Shortener</h2>

      <TextField
        label="Enter Long URL"
        variant="outlined"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        fullWidth
        style={{ marginBottom: '1rem' }}
      />

      <Button variant="contained" onClick={handleSubmit}>
        Make Link Shorter
      </Button>

      {message && (
        <p style={{ marginTop: '1rem', backgroundColor: '#f0f0f0', padding: '1rem' }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default UrlShortenerPage;