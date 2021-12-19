import React, { useState } from "react";
import { useActions, useTypedSelector } from "./hooks";

const App = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, loading, error } = useTypedSelector(
    (state) => state.repositories
  );

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <h1>Search NPM package</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {data && (
          <ul>
            {data?.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};

export default App;
