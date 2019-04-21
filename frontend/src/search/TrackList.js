import React from 'react';
import { List, Avatar } from 'antd';
import Track from './Track';

const TrackList = ({ tracks }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={tracks}
      renderItem={track => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={track.album.images[2].url} />}
            title={track.name}
            description={track.artists[0].name + ' - ' + track.album.name}
          />
        </List.Item>
      )}
    />
  );
};

export default TrackList;

/* 
<div>
      {tracks.map(track => (
        <Track key={track.id} track={track} />
      ))}
    </div>
*/
