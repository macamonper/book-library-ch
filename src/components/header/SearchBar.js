import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBar = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    navigate(`/search/${inputValue}`);
  };
  const handleChangeSearch = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search-bar"
        type="text"
        placeholder="search..."
        onChange={handleChangeSearch}
      ></input>
    </form>
  );
};
export default SearchBar;
