
import useFetch from './useFetch';
import BlogList from './BlogList';

const Home = () => {

   const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');


    return ( 
        <div className="Home">
            <h2>Home Page</h2>
            <p>Welcome to our blog! Here you will find a collection of insightful articles on various topics.</p>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="List of all blogs" />}
        </div>
    );
};
 
export default Home;