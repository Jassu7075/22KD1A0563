import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function StatisticsPage() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const savedLinks = JSON.parse(localStorage.getItem('links')) || [];
    setLinks(savedLinks);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Statistics</h2>
      <Link to="/">Go back to Shortener</Link>

      <table style={{ width: '100%', marginTop: '1rem', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Short URL</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Original URL</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Created At</th>
          </tr>
        </thead>
        <tbody>
          {links.map((link) => (
            <tr key={link.shortCode}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <a href={`/${link.shortCode}`} target="_blank" rel="noopener noreferrer">
                  {window.location.origin}/{link.shortCode}
                </a>
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px', wordBreak: 'break-all' }}>{link.longUrl}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{new Date(link.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StatisticsPage;