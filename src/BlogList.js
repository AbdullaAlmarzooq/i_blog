const BlogList = ({ blogs, title, handleDelete }) => {

    return ( 
        <div className="blog-list">
                {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body.substring(0, 200)}...</p>
                    <p>Written by {blog.author}</p>
                </div>
            
            ))}
        </div>
    );
        
}
 
export default BlogList;