import React from 'react';
import Track from './Track';

const TrackList = ({ tracks }) => {
  return (
    <div>
      {tracks.map(track => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
};

export default TrackList;