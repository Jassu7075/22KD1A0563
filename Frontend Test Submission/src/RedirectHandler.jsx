import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Log } from '../../Logging Middleware/logger';

function RedirectHandler() {
  const { shortCode } = useParams();
  const [message, setMessage] = useState('Redirecting...');

  useEffect(() => {
    Log("frontend", "info", "redirect", `Attempting to redirect short code: ${shortCode}`);
    const allLinks = JSON.parse(localStorage.getItem('links')) || [];
    const matchingLink = allLinks.find(link => link.shortCode === shortCode);

    if (matchingLink) {
      // In a real app, you would also add click tracking logic here
      // For example: matchingLink.clicks.push({ timestamp: new Date() });
      // localStorage.setItem('links', JSON.stringify(allLinks));
      
      Log("frontend", "info", "redirect", `Found matching URL: ${matchingLink.longUrl}. Redirecting now.`);
      window.location.href = matchingLink.longUrl;
    } else {
      Log("frontend", "error", "redirect", `Short code not found: ${shortCode}`);
      setMessage('URL not found.');
    }
  }, [shortCode]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{message}</h2>
    </div>
  );
}

export default RedirectHandler;