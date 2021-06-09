import React, { useState } from 'react'

export default function Nav() {
  const [selected, setSelected] = useState('Top')
  const posts = ['Top', 'New']

  return (
    <ul className='row nav'>
      {posts.map((post) => (
        <li key={post}>
          <button
            className='btn-clear nav-link'
            onClick={() => setSelected(post)}
            style={selected === post ? { color: 'rgb(187, 46, 31)' } : null}>
              {post}
          </button>
        </li>
      ))}
    </ul>
  )
}
