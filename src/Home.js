import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('Mindful Mike');


    useEffect(() => {   

        fetch('http://localhost:8000/blogs')
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
            })
            .catch(err => {
                console.error(err.message);
            });
    },[]);

    return ( 
        <div className="Home">
            <h2>Home Page</h2>
            <p>Welcome to our blog! Here you will find a collection of insightful articles on various topics.</p>
            {blogs && <BlogList blogs={blogs} title="List of all blogs" />}
        </div>
    );
};
 
export default Home;