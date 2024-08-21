export interface College {
  id: number;
  cdRank: number;
  name: string;
  logo: string;
  location: string;
  courseName: string;
  affiliatedBy: string;
  jeeAdvanceCutoff: number;
  jeeAdvanceCutoffYear: number;
  courseFee: number;
  averagePackage: number;
  highestPackage: number;
  userRating: number;
  totalReviews: number;
  nirfRanking: number;
  otherRankings: {
    name: string;
    rank: number;
    year: number;
  }[];
  featured: boolean;
}

export type SortableColumns = 'cdRank' | 'courseFee' | 'userRating' | 'nirfRanking';