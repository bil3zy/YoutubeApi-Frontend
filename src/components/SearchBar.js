import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

import "./SearchBar.css";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("");

  //   useEffect(() => {
  //     const response = async (term) => {
  //       await youtube.get("/search", {
  //         params: {
  //           q: term,
  //         },
  //       });
  //     };
  //     response();
  //   }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
    onTermSubmit(term);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          style={{
            height: 30,
            width: 350,
            borderRadius: 5,
            marginRight: 5,
          }}
          type="text"
          placeholder="Search for a video.."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button className="btn">
          <BsSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
