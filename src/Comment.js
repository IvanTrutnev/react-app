import React from 'react';

export default function Comment({comment}) {
  return (
    <div>
      <h3>autor: {comment.user}</h3>
      <section>{comment.text}</section>
    </div>
  )
}
