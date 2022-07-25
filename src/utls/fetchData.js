export const exerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    // CUT THE KEY TO .env
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  return await response.json();
};

export const youtubeOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
  },
};
