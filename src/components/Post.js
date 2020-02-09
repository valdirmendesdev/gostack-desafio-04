import React from 'react';
import Comment from './Comment';

function Post({ data }){
  return (
  <div>
    <div>
      <img src={data.author.avatar} />
      <span>{ data.author.name }</span>
      <span>{ data.date }</span>
      <p>{ data.content }</p>
    </div>
    { data.comments.map(comment => <Comment key={comment.id} data={comment} />) }
  </div>
  );
};

export default Post;