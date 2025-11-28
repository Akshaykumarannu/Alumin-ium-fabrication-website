export const galleryImages = [
  // Kitchen Work (1-20)
  ...Array.from({ length: 20 }, (_, i) => ({
    src: `/images/projects/project-${i + 1}.jpg`,
    alt: `Kitchen Project ${i + 1}`,
    category: 'Kitchen Work'
  })),
  // Room Furnishing (21-23 moved to Kitchen, 24 to TV Unit, 25-30 stay, 31-40 moved here)
  ...Array.from({ length: 3 }, (_, i) => ({
    src: `/images/projects/project-${i + 21}.jpg`,
    alt: `Kitchen Project ${i + 21}`,
    category: 'Kitchen Work'
  })),
  // Room Furnishing (24 moved here)
  {
    src: '/images/projects/project-24.jpg',
    alt: 'Room Furnishing Project 17',
    category: 'Room Furnishing',
  },
  ...Array.from({ length: 6 }, (_, i) => ({
    src: `/images/projects/project-${i + 25}.jpg`,
    alt: `Room Furnishing Project ${i + 1}`,
    category: 'Room Furnishing'
  })),
  // TV Units (31-40 moved to Room Furnishing)
  ...Array.from({ length: 10 }, (_, i) => ({
    src: `/images/projects/project-${i + 31}.jpg`,
    alt: `Room Furnishing Project ${i + 7}`,
    category: 'Room Furnishing'
  })),
  // Room Furnishing (41-43 moved here)
  ...Array.from({ length: 3 }, (_, i) => ({
    src: `/images/projects/project-${i + 41}.jpg`,
    alt: `Room Furnishing Project ${i + 18}`,
    category: 'Room Furnishing'
  })),
  // TV Units (44 moved here)
  {
    src: '/images/projects/project-44.jpg',
    alt: 'TV Unit Project 1',
    category: 'TV Units',
  },
  // Windows (45-51) - New Images
  ...Array.from({ length: 7 }, (_, i) => ({
    src: `/images/projects/project-${i + 45}.jpg`,
    alt: `Window Work ${i + 1}`,
    category: 'Windows'
  }))
];
