export const HOMES = [
  {
    id: "home-1",
    name: "Cherry Creek House",
    shortName: "Cherry Creek",
    openRooms: 1,
  },
  {
    id: "home-2",
    name: "Highlands Cottage",
    shortName: "Highlands",
    openRooms: 0,
  },
  {
    id: "home-3",
    name: "Littleton Lodge",
    shortName: "Littleton",
    openRooms: 1,
  },
  { id: "home-4", name: "Aurora Home", shortName: "Aurora", openRooms: 0 },
  { id: "home-5", name: "Parker Place", shortName: "Parker", openRooms: 1 },
] as const;

export type HomeId = (typeof HOMES)[number]["id"];

export const TOTAL_OPEN_ROOMS = HOMES.reduce((sum, h) => sum + h.openRooms, 0);

export const inquiriesByHome = [
  { home: "Cherry Creek", inquiries: 6, tours: 3 },
  { home: "Highlands", inquiries: 5, tours: 4 },
  { home: "Littleton", inquiries: 5, tours: 2 },
  { home: "Aurora", inquiries: 4, tours: 2 },
  { home: "Parker", inquiries: 4, tours: 2 },
];
