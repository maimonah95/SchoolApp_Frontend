let apiUrl
const expressPort = 5000
const apiUrls = {
  production: "https://calm-springs-76319.herokuapp.com/",
  development: `http://localhost:${expressPort}/api`
};

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
