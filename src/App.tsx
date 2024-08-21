import React from "react";
import CollegeTable from "./components/CollegeTable";

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">College Comparison</h1>
      <CollegeTable />
    </div>
  );
};

export default App;
