const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>iBlog</h1>
            <div className="links">
                <a href="/">Home </a>
                <a href="/create" style={{
                    borderRadius: '8px'
                }}>New Blog</a>
            </div>
        </nav>


     );
}
 
export default Navbar;