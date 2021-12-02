import './search.css'
const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <form  method="get">
        <label >
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search blog posts"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
);
export default SearchBar;