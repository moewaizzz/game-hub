import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((p) => p.id === id);
};

export default usePlatform;

// import useGenres from "./useGenres";

// const useGenre = (id?: number) => {
//   const { data: genres } = useGenres();
//   return genres?.results.find((g) => g.id === id);
// };

// export default useGenre;
