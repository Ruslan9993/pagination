import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import './App.css';

const  App = () => {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPages = posts.slice(firstPostIndex, lastPostIndex);

  const paginate = nbm => setCurrentPage(nbm)
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
      <Posts className='' isLoading={isLoading} posts={currentPages}/>
      <Pagination className='pagination' postsPerPage={postsPerPage} allPosts={posts.length} clickNumb={paginate}/>
    </div>
  );
}

export default App;
