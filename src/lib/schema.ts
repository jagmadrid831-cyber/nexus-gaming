/**
 * schema.org VideoGame + ItemList helpers for maximum Google discoverability
 */

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://nexus-gaming.vercel.app';

export type GameMeta = {
  slug: string;
  name: string;
  description: string;
  genre: string[];
  category: '8-bit' | '3D' | 'Casino' | 'Kids' | 'Idle';
  players?: string;
};

export const ALL_GAMES: GameMeta[] = [
  { slug: 'centipede-lite-8bit', name: 'Centipede Lite', description: 'Free 8-bit Centipede-style arcade game. Shoot the centipede, avoid mushrooms. Instant play in browser.', genre: ['Action', 'Arcade'], category: '8-bit' },
  { slug: 'frogger-lite-8bit', name: 'Frogger Lite', description: 'Free Frogger-style crossing game. Avoid cars, ride logs. Classic 8-bit fun online.', genre: ['Action', 'Arcade'], category: '8-bit' },
  { slug: 'pacman-lite-8bit', name: 'Pac-Man Lite', description: 'Free Pac-Man style maze game. Eat dots, avoid ghosts, grab power pellets.', genre: ['Action', 'Arcade', 'Maze'], category: '8-bit' },
  { slug: 'lane-shift-3d', name: 'Lane Shift 3D', description: 'Free 3D lane runner. Swipe to change lanes, dodge obstacles in a tunnel.', genre: ['Action', 'Racing', '3D'], category: '3D' },
  { slug: 'asteroid-field-3d', name: 'Asteroid Field 3D', description: 'Free 3D asteroid shooter. Fly through space, destroy rocks, survive the field.', genre: ['Action', 'Shooter', '3D'], category: '3D' },
  { slug: 'maze-3d', name: 'Maze 3D', description: 'Free first-person 3D maze. Find the exit before time runs out. Raycasting browser game.', genre: ['Puzzle', 'Adventure', '3D'], category: '3D' },
  { slug: 'roulette-lite-casino', name: 'Roulette Lite', description: 'Free European roulette for fun only. No real money. Bet on color and parity.', genre: ['Casino', 'Card & Board'], category: 'Casino' },
  { slug: 'slots-fruit-casino', name: 'Slots Fruit', description: 'Free fruit slots casino lite. Match symbols, win credits. Entertainment only, no real money.', genre: ['Casino', 'Slots'], category: 'Casino' },
  { slug: 'blackjack-lite-casino', name: 'Blackjack Lite', description: 'Free blackjack vs dealer. Hit or stand. Fun only, no real money gambling.', genre: ['Casino', 'Card Game'], category: 'Casino' },
  { slug: 'balloon-pop-kids', name: 'Balloon Pop', description: 'Free colorful balloon popping game for kids. Safe, simple, instant play.', genre: ['Kids', 'Casual'], category: 'Kids' },
  { slug: 'bakery-idle-sim', name: 'Bakery Idle', description: 'Free bakery idle simulator. Bake, hire, upgrade. Progress offline in the browser.', genre: ['Idle', 'Simulation', 'Incremental'], category: 'Idle' },
];

export function videoGameJsonLd(game: GameMeta) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: game.name,
    description: game.description,
    url: `${SITE}/games/${game.slug}.html`,
    image: `${SITE}/next.svg`,
    genre: game.genre,
    gamePlatform: ['Web Browser', 'HTML5', 'Mobile Web'],
    applicationCategory: 'Game',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
    author: { '@type': 'Organization', name: 'Nexus Gaming' },
    publisher: { '@type': 'Organization', name: 'Nexus Gaming', url: SITE },
    inLanguage: ['en', 'es'],
    isAccessibleForFree: true,
    playMode: 'SinglePlayer',
    numberOfPlayers: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 2 },
  };
}

export function allGamesItemListJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Nexus Gaming Free Online Games',
    description: 'Free HTML5 games: 8-bit, 3D, casino lite, kids and idle simulators.',
    numberOfItems: ALL_GAMES.length,
    itemListElement: ALL_GAMES.map((g, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'VideoGame',
        name: g.name,
        url: `${SITE}/games/${g.slug}.html`,
        genre: g.genre,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      },
    })),
  };
}
