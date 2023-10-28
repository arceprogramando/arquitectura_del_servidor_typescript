
const {
    DB_PORT,
    PORT,
    DB_CNN,
    DB_HOST,
    DB_NAME,
    NODE_ENV,
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET,
    PERSISTENCE,
    EMAIL,
    PSW_EMAIL,
    BASE_URL,
  } = process.env;
  
  const configObject = {
    DB_PORT,
    PORT,
    DB_CNN,
    DB_HOST,
    DB_NAME,
    NODE_ENV,
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET,
    PERSISTENCE,
    EMAIL,
    PSW_EMAIL,
    BASE_URL,
  };
  
  export default configObject;