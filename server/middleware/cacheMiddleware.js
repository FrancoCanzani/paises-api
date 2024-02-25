const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 60 * 60 }); // Cache with a TTL of 1 hour

const cacheMiddleware = (req, res, next) => {
  const key = req.originalUrl; // Use the request URL as the cache key
  const cachedData = cache.get(key);

  if (cachedData) {
    // If data is found in cache, return it
    return res.status(200).json(cachedData);
  }

  next();
};

module.exports = cacheMiddleware;
