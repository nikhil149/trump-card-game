"use client";
import getUsersByName from "@/app/actions/getUsersByName";
import axios from "axios";
import { ChangeEvent, useState } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;

    setSearchValue(value);
  };

  const searchClickHandler = async () => {
    const users = await axios.get("/api/users/search", {
      params: { search: searchValue },
    });
    console.log(users.data);
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
      <button onClick={() => searchClickHandler()}>Search</button>
    </div>
  );
};

export default Search;
