import React from 'react';
import styled from 'styled-components';

const Border = styled.div`
  border: 1px solid black;
`;

const Track = ({ track }) => {
  const { name, artists, album } = track;
  return (
    <Border>
      <p>{name}</p>
      <p>{artists[0].name}</p>
      <p>{album.name}</p>
    </Border>
  );
};

export default Track;
