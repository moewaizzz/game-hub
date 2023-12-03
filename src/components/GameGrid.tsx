import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GamesCard from "./GamesCard";
import GameCardSkeletons from "./GameCardSkeletons";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing="10px"
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeletons key={skeleton} />)}
        {games.map((game) => (
          <GamesCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
