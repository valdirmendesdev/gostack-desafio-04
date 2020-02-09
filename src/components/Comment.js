import React from 'react';

function Comment({ data }){
  return(
    <div className="post-comments">
      <hr />
      <div key={data.id} className="comment">
      <img className="avatar" src={data.author.avatar} />
      <p>
        <span>{ data.author.name }</span>
        { data.content }
        </p>
      </div>
    </div>
  );
}

export default Comment;