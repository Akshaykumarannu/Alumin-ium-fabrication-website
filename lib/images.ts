// High-quality Unsplash images for aluminium fabrication business
export const images = {
  hero: {
    main: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=90', // Modern architecture facade
    fallback: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=90', // Glass building
  },
  services: {
    windows: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', // Modern windows
    acp: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', // Building facade
    glass: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80', // Glass office
    cabin: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80', // Office interior
    railing: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80', // Steel structure
    structural: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80', // Metal fabrication
  },
  gallery: [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', // Modern building
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', // Glass facade
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80', // Office building
    'https://images.unsplash.com/photo-1565008576049-11c8f8c44ef9?w=800&q=80', // Steel construction
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', // Architecture
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80', // Construction site
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80', // Workshop
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80', // Metal work
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80', // Modern exterior
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80', // Interior design
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', // Glass building
    'https://images.unsplash.com/photo-1565008444557-e8a9528f0b8d?w=800&q=80', // Industrial
  ],
  about: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80', // Craftsmanship
  background: {
    pattern: 'https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=1200&q=80&opacity=0.1', // Subtle texture
  }
};

export const getOptimizedImageUrl = (url: string, width: number = 800, quality: number = 80) => {
  return `${url}&w=${width}&q=${quality}`;
};
