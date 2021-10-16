import React from "react";

function Search({ toSearch, handleSearch }) {
  return (
    <div>
      Search: <input value={toSearch} onChange={handleSearch} />
    </div>
  );
}

export default Search;
