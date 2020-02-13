import React from 'react'

const Post = ({ title, summary, dateTime }) => (
  <div>
    {console.log(summary)}
    <div>
      <h1>
        Title:  {title}
      </h1>
      <h3>
        Posted:  {dateTime}
      </h3>
    </div>
    <div>
      <h4>
        Summary:
      </h4>
      {summary}
    </div>
  </div>
)

export default Post
