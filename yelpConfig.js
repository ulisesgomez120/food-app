import axios from "axios";

export const yelpConfig = {
  baseUrls: {
    foodSearch: "https://api.yelp.com/v3/businesses/search?term=food&",
  },
};
const token =
  "S7elWyjPsvQyJwo5NKCJ0nhpGyY7K7sMOIYaOb8XeudhWIVDYJHvFNJ3V-VbvKQW2vvOgg3Fa7KdmuFrbbmfL1Funp9s8fbhLH7uY2UyuueF4Tpmuh8_bRHjcYjQXXYx";
export const yelpCall = axios.create({
  baseURL: "https://api.yelp.com/v3",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-type": "application/json",
  },
});
