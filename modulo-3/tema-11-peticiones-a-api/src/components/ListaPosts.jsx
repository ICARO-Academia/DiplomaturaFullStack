import { useState, useEffect } from 'react'
import axios from 'axios'

function ListaPosts() {
  const [posts, setPosts] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setPosts(res.data)
        setCargando(false)
      })
      .catch((error) => console.error('Error al obtener posts:', error))
  }, [])

  return (
    <div>
      <h1>Lista de Posts</h1>
      {cargando ? <p>Cargando...</p> : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListaPosts