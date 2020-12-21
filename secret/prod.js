const google = {
  client: {
    ID: process.env.GOOGLE_CLIENT_ID,
    SECRET: process.env.GOOGLE_CLIENT_SECRET,
  } 
};

const mongo = {
  uri: process.env.MONGO_URI, 
};

const cookieSession = {
  encriptionKey: process.env.COOKIES_KEYS
}

module.exports = {
  google,
  mongo, 
  cookieSession, 
}