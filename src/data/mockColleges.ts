import { College } from '../types/types.ts';

export const mockColleges: College[] = [
  {
    id: 1,
    cdRank: 1,
    name: "Indian Institute of Technology, Delhi",
    logo: "https://dummyimage.com/100x100/000/fff&text=IIT",
    location: "New Delhi",
    courseName: "B.Tech in Computer Science",
    affiliatedBy: "UGC",
    jeeAdvanceCutoff: 185,
    jeeAdvanceCutoffYear: 2023,
    courseFee: 200000,
    averagePackage: 1600000,
    highestPackage: 4000000,
    userRating: 9.2,
    totalReviews: 1500,
    nirfRanking: 2,
    otherRankings: [
      { name: "India Today", rank: 1, year: 2023 },
      { name: "THE", rank: 3, year: 2023 },
    ],
    featured: false
  },
  {
    id: 2,
    cdRank: 2,
    name: "Indian Institute of Technology, Bombay",
    logo: "https://dummyimage.com/100x100/000/fff&text=IIT",
    location: "Mumbai",
    courseName: "B.Tech in Electrical Engineering",
    affiliatedBy: "UGC",
    jeeAdvanceCutoff: 180,
    jeeAdvanceCutoffYear: 2023,
    courseFee: 210000,
    averagePackage: 1550000,
    highestPackage: 3800000,
    userRating: 9.1,
    totalReviews: 1400,
    nirfRanking: 3,
    otherRankings: [
      { name: "India Today", rank: 2, year: 2023 },
      { name: "THE", rank: 4, year: 2023 },
    ],
    featured: false
  },
  {
    id: 3,
    cdRank: 3,
    name: "Indian Institute of Technology, Madras",
    logo: "https://dummyimage.com/100x100/000/fff&text=IIT",
    location: "Chennai",
    courseName: "B.Tech in Mechanical Engineering",
    affiliatedBy: "UGC",
    jeeAdvanceCutoff: 178,
    jeeAdvanceCutoffYear: 2023,
    courseFee: 205000,
    averagePackage: 1580000,
    highestPackage: 3900000,
    userRating: 9.3,
    totalReviews: 1600,
    nirfRanking: 1,
    otherRankings: [
      { name: "India Today", rank: 3, year: 2023 },
      { name: "THE", rank: 2, year: 2023 },
    ],
    featured: true
  },
  {
    id: 4,
    cdRank: 4,
    name: "Indian Institute of Technology, Kanpur",
    logo: "https://dummyimage.com/100x100/000/fff&text=IIT",
    location: "Kanpur",
    courseName: "B.Tech in Aerospace Engineering",
    affiliatedBy: "UGC",
    jeeAdvanceCutoff: 175,
    jeeAdvanceCutoffYear: 2023,
    courseFee: 195000,
    averagePackage: 1520000,
    highestPackage: 3700000,
    userRating: 9.0,
    totalReviews: 1300,
    nirfRanking: 4,
    otherRankings: [
      { name: "India Today", rank: 4, year: 2023 },
    ],
    featured: false
  },
  {
    id: 5,
    cdRank: 5,
    name: "Indian Institute of Technology, Kharagpur",
    logo: "https://dummyimage.com/100x100/000/fff&text=IIT",
    location: "Kharagpur",
    courseName: "B.Tech in Chemical Engineering",
    affiliatedBy: "UGC",
    jeeAdvanceCutoff: 172,
    jeeAdvanceCutoffYear: 2023,
    courseFee: 198000,
    averagePackage: 1500000,
    highestPackage: 3600000,
    userRating: 8.9,
    totalReviews: 1250,
    nirfRanking: 5,
    otherRankings: [
      { name: "India Today", rank: 5, year: 2023 },
    ],
    featured: false
  },
  {
    id: 6,
    cdRank: 6,
    name: "Indian Institute of Technology, Roorkee",
    logo: "https://dummyimage.com/100x100/000/fff&text=IIT",
    location: "Roorkee",
    courseName: "B.Tech in Civil Engineering",
    affiliatedBy: "UGC",
    jeeAdvanceCutoff: 170,
    jeeAdvanceCutoffYear: 2023,
    courseFee: 192000,
    averagePackage: 1480000,
    highestPackage: 3500000,
    userRating: 8.8,
    totalReviews: 1200,
    nirfRanking: 6,
    otherRankings: [
      { name: "India Today", rank: 6, year: 2023 },
    ],
    featured: false
  },
  {
    id: 7,
    cdRank: 7,
    name: "Birla Institute of Technology and Science, Pilani",
    logo: "https://dummyimage.com/100x100/000/fff&text=IIT",
    location: "Pilani",
    courseName: "B.E. in Computer Science",
    affiliatedBy: "UGC",
    jeeAdvanceCutoff: 320,
    jeeAdvanceCutoffYear: 2023,
    courseFee: 245000,
    averagePackage: 1400000,
    highestPackage: 3500000,
    userRating: 8.9,
    totalReviews: 1200,
    nirfRanking: 17,
    otherRankings: [
      { name: "India Today", rank: 7, year: 2023 },
    ],
    featured: true
  },
  {
    id: 8,
    cdRank: 8,
    name: "National Institute of Technology, Tiruchirappalli",
    logo: "https://dummyimage.com/100x100/000/fff&text=IIT",
    location: "Tiruchirappalli",
    courseName: "B.Tech in Electronics and Communication",
    affiliatedBy: "UGC",
    jeeAdvanceCutoff: 165,
    jeeAdvanceCutoffYear: 2023,
    courseFee: 125000,
    averagePackage: 1100000,
    highestPackage: 2800000,
    userRating: 8.7,
    totalReviews: 1000,
    nirfRanking: 9,
    otherRankings: [
      { name: "India Today", rank: 10, year: 2023 },
    ],
    featured: false
  },
  {
    id: 9,
    cdRank: 9,
    name: "Vellore Institute of Technology",
    logo: "https://dummyimage.com/100x100/000/fff&text=IIT",
    location: "Vellore",
    courseName: "B.Tech in Information Technology",
    affiliatedBy: "UGC",
    jeeAdvanceCutoff: 0,
    jeeAdvanceCutoffYear: 2023,
    courseFee: 180000,
    averagePackage: 950000,
    highestPackage: 2500000,
    userRating: 8.5,
    totalReviews: 1100,
    nirfRanking: 13,
    otherRankings: [
      { name: "India Today", rank: 12, year: 2023 },
    ],
    featured: true
  },
  {
    id: 10,
    cdRank: 10,
    name: "Indian Institute of Technology, Guwahati",
    logo: "https://dummyimage.com/100x100/000/fff&text=IIT",
    location: "Guwahati",
    courseName: "B.Tech in Biotechnology",
    affiliatedBy: "UGC",
    jeeAdvanceCutoff: 168,
    jeeAdvanceCutoffYear: 2023,
    courseFee: 198000,
    averagePackage: 1480000,
    highestPackage: 3550000,
    userRating: 8.9,
    totalReviews: 1150,
    nirfRanking: 7,
    otherRankings: [
      { name: "India Today", rank: 8, year: 2023 },
    ],
    featured: false
  },
  {
    id: 11,
    cdRank: 11,
    name: "Delhi Technological University",
    logo: "https://dummyimage.com/100x100/000/fff&text=IIT",
    location: "New Delhi",
    courseName: "B.Tech in Software Engineering",
    affiliatedBy: "UGC",
    jeeAdvanceCutoff: 160,
    jeeAdvanceCutoffYear: 2023,
    courseFee: 150000,
    averagePackage: 1000000,
    highestPackage: 2700000,
    userRating: 8.6,
    totalReviews: 950,
    nirfRanking: 36,
    otherRankings: [
      { name: "India Today", rank: 15, year: 2023 },
    ],
    featured: false
  },
  {
    id: 12,
    cdRank: 12,
    name: "Indian Institute of Technology, Hyderabad",
    logo: "https://dummyimage.com/100x100/000/fff&text=IIT",
    location: "Hyderabad",
    courseName: "B.Tech in Artificial Intelligence",
    affiliatedBy: "UGC",
    jeeAdvanceCutoff: 166,
    jeeAdvanceCutoffYear: 2023,
    courseFee: 210000,
    averagePackage: 1520000,
    highestPackage: 3700000,
    userRating: 9.1,
    totalReviews: 1050,
    nirfRanking: 8,
    otherRankings: [
      { name: "India Today", rank: 9, year: 2023 },
    ],
    featured: true
  },
  {
    id: 13,
    cdRank: 13,
    name: "National Institute of Technology, Rourkela",
    logo: "https://dummyimage.com/100x100/000/fff&text=IIT",
    location: "Rourkela",
    courseName: "B.Tech in Metallurgical Engineering",
    affiliatedBy: "UGC",
    jeeAdvanceCutoff: 155,
    jeeAdvanceCutoffYear: 2023,
    courseFee: 130000,
    averagePackage: 950000,
    highestPackage: 2400000,
    userRating: 8.4,
    totalReviews: 900,
    nirfRanking: 15,
    otherRankings: [
      { name: "India Today", rank: 18, year: 2023 },
    ],
    featured: false
  },
  {
    id: 14,
    cdRank: 14,
    name: "SRM Institute of Science and Technology",
    logo: "https://dummyimage.com/100x100/000/fff&text=IIT",
    location: "Chennai",
    courseName: "B.Tech in Robotics Engineering",
    affiliatedBy: "UGC",
    jeeAdvanceCutoff: 0,
    jeeAdvanceCutoffYear: 2023,
    courseFee: 175000,
    averagePackage: 900000,
    highestPackage: 2300000,
    userRating: 8.3,
    totalReviews: 1100,
    nirfRanking: 31,
    otherRankings: [
      { name: "India Today", rank: 23, year: 2023 },
    ],
    featured: true
  },
  {
    id: 15,
    cdRank: 15,
    name: "Indian Institute of Technology, Indore",
    logo: "https://dummyimage.com/100x100/000/fff&text=IIT",
    location: "Indore",
    courseName: "B.Tech in Data Science",
    affiliatedBy: "UGC",
    jeeAdvanceCutoff: 162,
    jeeAdvanceCutoffYear: 2023,
    courseFee: 205000,
    averagePackage: 1450000,
    highestPackage: 3500000,
    userRating: 8.8,
    totalReviews: 850,
    nirfRanking: 10,
    otherRankings: [
      { name: "India Today", rank: 13, year: 2023 },
    ],
    featured: false
  },
  {
    id: 16,
    cdRank: 16,
    name: "Manipal Institute of Technology",
    logo: "https://dummyimage.com/100x100/000/fff&text=IIT",
    location: "Manipal",
    courseName: "B.Tech in Biomedical Engineering",
    affiliatedBy: "UGC",
    jeeAdvanceCutoff: 0,
    jeeAdvanceCutoffYear: 2023,
    courseFee: 230000,
    averagePackage: 850000,
    highestPackage: 2200000,
    userRating: 8.2,
    totalReviews: 1200,
    nirfRanking: 45,
    otherRankings: [
      { name: "India Today", rank: 21, year: 2023 },
    ],
    featured: true
  },
  {
    id: 17,
    cdRank: 17,
    name: "National Institute of Technology, Warangal",
    logo: "https://dummyimage.com/100x100/000/fff&text=IIT",
    location: "Warangal",
    courseName: "B.Tech in Computer Science and Engineering",
    affiliatedBy: "UGC",
    jeeAdvanceCutoff: 158,
    jeeAdvanceCutoffYear: 2023,
    courseFee: 135000,
    averagePackage: 1050000,
    highestPackage: 2600000,
    userRating: 8.5,
    totalReviews: 950,
    nirfRanking: 19,
    otherRankings: [
      { name: "India Today", rank: 17, year: 2023 },
    ],
    featured: false
  },
]