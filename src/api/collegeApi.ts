import { College, SortableColumns } from '../types/types.ts';
import { mockColleges } from '../data/mockColleges.ts';

export const fetchColleges = async (page: number = 1, limit: number = 10): Promise<College[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  return mockColleges.slice(startIndex, endIndex);
};

export const searchColleges = async (query: string): Promise<College[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockColleges.filter(college =>
    college.name.toLowerCase().includes(query.toLowerCase())
  );
};

export const sortColleges = async (key: SortableColumns, order: 'asc' | 'desc'): Promise<College[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return [...mockColleges].sort((a, b) => {
    if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
    if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
    return 0;
  });
};