import React from 'react';
import { List, Avatar, Button } from 'antd';

const TrackList = ({ tracks, loading, onLoadMore }) => {
  const loadMore = !loading ? (
    <div
      style={{
        textAlign: 'center',
        margin: 12,
        height: 32,
        lineHeight: '32px',
      }}
    >
      <Button onClick={onLoadMore}>Load more</Button>
    </div>
  ) : null;
  return (
    <List
      style={{
        maxWidth: 350,
        marginLeft: 10,
      }}
      bordered
      loadMore={tracks.length > 0 && loadMore}
      itemLayout="horizontal"
      dataSource={tracks}
      loading={loading}
      locale={{ emptyText: 'no tracks to show' }}
      renderItem={track => {
        return (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar alt="album cover" src={track.album.images[2].url} />
              }
              title={track.name}
              description={track.artists[0].name + ' - ' + track.album.name}
            />
          </List.Item>
        );
      }}
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
