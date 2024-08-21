import React, { useState, useEffect, useCallback } from "react";
import { College, SortableColumns } from "../types/types";
import CollegeTableRow from "./CollegeTableRow";
import SearchBar from "./SearchBar";
import SortControls from "./SortControls";
import { fetchColleges, searchColleges, sortColleges } from "../api/collegeApi";

const CollegeTable: React.FC = () => {
  const [colleges, setColleges] = useState<College[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState<SortableColumns | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  // Fetch initial data
  useEffect(() => {
    const loadInitialData = async () => {
      setLoading(true);
      const data = await fetchColleges();
      setColleges(data);
      setLoading(false);
    };
    loadInitialData();
  }, []);

  // Handle search
  const handleSearch = useCallback(async (term: string) => {
    setSearchTerm(term);
    setLoading(true);
    const results = await searchColleges(term);
    setColleges(results);
    setLoading(false);
    setPage(1);
  }, []);

  // Handle sorting
  const handleSort = useCallback(
    async (key: SortableColumns) => {
      setSortKey(key);
      setSortOrder((prev) =>
        prev === "asc" || prev === null ? "desc" : "asc"
      );
      setLoading(true);
      const sorted = await sortColleges(
        key,
        sortOrder === "asc" ? "desc" : "asc"
      );
      setColleges(sorted);
      setLoading(false);
    },
    [sortOrder]
  );

  // Load more colleges (infinite scroll)
  const loadMore = useCallback(async () => {
    if (loading || searchTerm) return;
    setLoading(true);
    const nextPage = page + 1;
    const moreColleges = await fetchColleges(nextPage);
    setColleges((prev) => [...prev, ...moreColleges]);
    setPage(nextPage);
    setLoading(false);
  }, [loading, searchTerm, page]);

  // Infinite scroll handler
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return;
    }
    loadMore();
  }, [loadMore, loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      <table className="w-full border-collapse">
        <SortControls
          onSort={handleSort}
          sortKey={sortKey}
          sortOrder={sortOrder}
        />
        <tbody>
          {colleges.map((college) => (
            <CollegeTableRow key={college.id} college={college} />
          ))}
        </tbody>
      </table>
      {loading && <p className="text-center mt-4">Loading...</p>}
    </div>
  );
};

export default CollegeTable;
