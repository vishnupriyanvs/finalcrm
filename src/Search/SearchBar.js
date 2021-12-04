import './search.css'
const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <form  method="get" style={{textAlign:'center'}}>
        <label >
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search ..."
            name="s"
            style={{width:'200px'}}
        />
        <button type="submit">Search</button>
    </form>
);
export default SearchBar;