import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGames'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'

export interface GameQuery {
    genre: Genre | null
    platform: Platform | null
    sortOrder?: string
    searchText?: string
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
            templateColumns={{
                base: '1fr',
                lg: '200px 1fr',
            }}
        >
            <GridItem gridArea="nav">
                <NavBar
                    onSearch={(searchText) =>
                        setGameQuery({ ...gameQuery, searchText })
                    }
                />
            </GridItem>
            <Show above="lg">
                <GridItem gridArea="aside" paddingX={5}>
                    <GenreList
                        onSelectGenre={(genre) =>
                            setGameQuery({ ...gameQuery, genre })
                        }
                        selectedGenre={gameQuery.genre}
                    />
                </GridItem>
            </Show>
            <GridItem gridArea="main">
                <Box paddingLeft={2}>
                    <GameHeading gameQuery={gameQuery} />
                    <Flex marginBottom={5}>
                        <Box marginRight={5}>
                            <PlatformSelector
                                onSelectPlatform={(platform) =>
                                    setGameQuery({ ...gameQuery, platform })
                                }
                                selectedPlatform={gameQuery.platform}
                            />
                        </Box>
                        <SortSelector
                            onSelectSortOrder={(sortOrder) =>
                                setGameQuery({ ...gameQuery, sortOrder })
                            }
                            sortOrder={gameQuery.sortOrder}
                        />
                    </Flex>
                </Box>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    )
}

export default App
