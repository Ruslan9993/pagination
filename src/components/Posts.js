import React from 'react'

const Posts = ({ isLoading, posts }) => {

  if(isLoading) {
    return (
      <div>Loading...</div>
    )
  }
  return (
    <div>
      {
        posts.map(post => (
          <ul className='list-group'>
            <li className='list-group-item' key={post.id}>
              {post.title}
            </li>
          </ul>
        ))
      }
    </div>
  )
}
export default Posts;
