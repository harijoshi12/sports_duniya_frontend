import React, { useState } from "react";

interface Props {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search colleges..."
      value={searchTerm}
      onChange={handleChange}
      className="w-full px-4 py-2 mb-4 border rounded"
    />
  );
};

export default SearchBar;
