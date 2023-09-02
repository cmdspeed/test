const fetchVideos = async () => {
  const API_KEY = "3ff6f99473ad32775432a3dc640480bc";
  const array = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );
  const response = await array.json();
  return response;
};

const test = async () => {
  console.log(await fetchVideos());
};

test();
