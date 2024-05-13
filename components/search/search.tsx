"use client";
import getUsersByName from "@/app/actions/getUsersByName";
import { ChangeEvent, useState } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;

    setSearchValue(value);
  };

  return (
    <div>
      <label htmlFor="search">Search Your Friend</label>
      <input
        id="search"
        type="text"
        value={searchValue}
        onChange={(e) => searchHandler(e)}
      />
      <button onClick={() => getUsersByName(searchValue)}>Search</button>
    </div>
  );
};

export default Search;
