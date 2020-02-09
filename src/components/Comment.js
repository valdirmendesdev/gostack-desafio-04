import React from 'react';

function Comment({ data }){
  return(
    <div>
      <img src={data.author.avatar} />
      <span>{ data.author.name }</span>
      <p>{ data.content }</p>
    </div>
  );
}

export default Comment;