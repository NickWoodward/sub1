const env = '';

// THESE ARE ALL PUBLIC KEYS/URLS, JUST HERE FOR ORGANISATION
export const API_URL = env==='production'? `https://api.sub1.io` : `http://localhost:4600`;
export const SITE_KEY = env==='production'? '0x4AAAAAAACrjWirppgZ6gk1':'3x00000000000000000000FF';