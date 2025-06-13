import { useState } from 'react';
const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('New blog added');
    });
  }

    return ( 
        <div className="create">
        <h2>Create a new blog</h2>
        <form onSubmit={(e) => {
            e.preventDefault();
            const blog = { title, body, author };
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blog)
            }).then(() => {
                console.log('New blog added');
            });
        }}>
            <label>Blog title:</label>
            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

            <label>Blog body:</label>
            <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>

            <label>Blog author:</label>
            <select>
                <option value="mario">Mario</option>
                <option value="luigi">Luigi</option>
            </select>

            <button>Add Blog</button>
        </form>
    </div>
     );
}

export default Create;