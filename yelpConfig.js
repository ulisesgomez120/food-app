import axios from "axios";

export default yelpConfig = {
  baseUrls: {
    foodSearch: "https://api.yelp.com/v3/businesses/search?term=food&",
  },
};
const yelpCall = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/search?term=food&",
  headers: {},
});
