// src/components/CollegeTable.tsx

import React, { useState, useEffect, useCallback, useRef } from "react";
import { College, SortableColumns } from "../types/types";
import CollegeTableRow from "./CollegeTableRow";
import SearchBar from "./SearchBar";
import SortControls from "./SortControls";
import { fetchColleges, searchColleges, sortColleges } from "../api/collegeApi";

const CollegeTable: React.FC = () => {
  const [colleges, setColleges] = useState<College[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState<SortableColumns | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastCollegeElementRef = useCallback(
    (node: HTMLTableRowElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  // Fetch initial data
  useEffect(() => {
    const loadInitialData = async () => {
      setLoading(true);
      const data = await fetchColleges(1);
      setColleges(data);
      setLoading(false);
      setHasMore(data.length === 10);
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
    setHasMore(false);
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
      setPage(1);
      setHasMore(false);
    },
    [sortOrder]
  );

  // Load more colleges (infinite scroll)
  const loadMore = useCallback(async () => {
    if (loading || !hasMore || searchTerm) return;
    setLoading(true);
    const nextPage = page + 1;
    const moreColleges = await fetchColleges(nextPage);
    if (moreColleges.length > 0) {
      setColleges((prev) => [...prev, ...moreColleges]);
      setPage(nextPage);
      setHasMore(moreColleges.length === 10);
    } else {
      setHasMore(false);
    }
    setLoading(false);
  }, [loading, hasMore, searchTerm, page]);

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <SortControls
            onSort={handleSort}
            sortKey={sortKey}
            sortOrder={sortOrder}
          />
          <tbody>
            {colleges.map((college, index) => (
              <CollegeTableRow
                key={college.id}
                college={college}
                isEven={index % 2 === 0}
                ref={
                  index === colleges.length - 1 ? lastCollegeElementRef : null
                }
              />
            ))}
          </tbody>
        </table>
      </div>
      {loading && <p className="text-center mt-4">Loading...</p>}
      {!hasMore && <p className="text-center mt-4">No more colleges to load</p>}
    </div>
  );
};

export default CollegeTable;
