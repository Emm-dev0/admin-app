import React, { useEffect, useState } from 'react';

const SpotifyComponent = () => {
  const [genres, setGenres] = useState([]);
  const [name, setName] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientId = "6b6abbf6057946979e4d2464e2d755cc" //'YOUR_SPOTIFY_CLIENT_ID';
        const clientSecret = "5885a0b91ec44da39acb8788d04c1b21" //'YOUR_SPOTIFY_CLIENT_SECRET';
        const accessToken = "BQCwmikg9Wr_-jT59EE0OU6yOXOWMEhH4S5Tlrao8NizNw3HSNo9JH5bpeIZ-AlblpD3YuucWejCPLcG9r4vkuw4ErX1KvSeihhthHP6y_R9oMECuck"; // Obtain this through Spotify authentication
        const artistLink = "5xLSa7l4IV1gsQfhAMvl0U?si=3BSmQHBSRuSsIJHCs8v7zw"

        // Base64 encode the client ID and client secret
        const base64Credentials = btoa(`${clientId}:${clientSecret}`);

        // Spotify API endpoint for getting a user's playlists
        const apiUrl = "https://api.spotify.com/v1/artists/5xLSa7l4IV1gsQfhAMvl0U?si=3BSmQHBSRuSsIJHCs8v7zw";


        const fetchOptions = {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        };

        const response = await fetch(apiUrl, fetchOptions);
        const data = await response.json();
        console.log(data);
        // Update state with the fetched data
        setGenres(data.genres);
        setName(data.name);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []); // Run once on component mount

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
    <h1>Top Genres of Spotify {name}</h1>
    {genres && genres.length > 0 ? (
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    ) : (
      <p>No tracks available.</p>
    )}
  </div>

  );
};

export default SpotifyComponent;
