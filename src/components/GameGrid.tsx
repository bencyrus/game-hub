import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
import { Genre } from '../hooks/useGenres'

interface GameGridProps {
    selectedGenre: Genre | null
}

const GameGrid = ({ selectedGenre }: GameGridProps) => {
    const { data, error, loading } = useGames(selectedGenre)

    const Skeletons = [1, 2, 3, 4, 5, 6]

    return (
        <div>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
                spacing={3}
                padding="10px"
            >
                {loading &&
                    Skeletons.map((s) => (
                        <GameCardContainer key={s}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    ))}
                {data.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </div>
    )
}

export default GameGrid
