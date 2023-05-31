import { NextPage } from 'next';

const SearchBar: NextPage = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
