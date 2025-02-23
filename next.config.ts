// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/pages/home", 
        permanent: true,
      },
    ];
  },
};