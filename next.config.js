module.exports = {
  reactStrictMode: true,

  images: {
    domains: ["images.unsplash.com"],
  },

  env: {
    NEXT_PUBLIC_FOURSQUARE_API_KEY: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
    NEXT_PUBLIC_UNSPLASH_ACCESS_KEY:
      process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
    NEXT_PUBLIC_UNSPLASH_SECRET_KEY:
      process.env.NEXT_PUBLIC_UNSPLASH_SECRET_KEY,
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    AIRTABLE_BASE_KEY: process.env.AIRTABLE_BASE_KEY,
  },
};
