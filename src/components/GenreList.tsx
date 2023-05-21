import {
    HStack,
    List,
    ListItem,
    Image,
    Spinner,
    Button,
    Box,
    Heading,
} from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

interface GenreListProps {
    onSelectGenre: (genre: Genre) => void
    selectedGenre: Genre | null
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
    const { data, loading, error } = useGenres()

    if (error) {
        return null
    }

    if (loading) {
        return <Spinner />
    }

    return (
        <Box>
            <Heading as="h2" fontSize="2xl" marginBottom={3}>
                Genres
            </Heading>
            <List>
                {data.map((genre) => (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                boxSize="32px"
                                objectFit="cover"
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                                alt={genre.name}
                            />
                            <Button
                                fontSize="lg"
                                variant="link"
                                whiteSpace="normal"
                                textAlign="left"
                                onClick={() => onSelectGenre(genre)}
                                fontWeight={
                                    selectedGenre?.id === genre.id
                                        ? 'bold'
                                        : 'normal'
                                }
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default GenreList
