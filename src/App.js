import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './components/Posts';

const  App = () => {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesPerPage, setPagesPerPage] = useState(10);

  const lastPostIndex = currentPage * pagesPerPage;
  const firstPostIndex = lastPostIndex - pagesPerPage;
  const currentPages = posts.slice(firstPostIndex, lastPostIndex);
  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true)
      const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(result.data)
      setIsLoading(false)
    }

    getPosts()
  }, [])

  return (
    <div className="container">
      <h2 className='text-center mt-2 mb-3'>Pagination example</h2>
      <Posts isLoading={isLoading} posts={currentPages}/>
    </div>
  );
}

export default App;
