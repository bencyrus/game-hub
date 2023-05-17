import { Badge } from '@chakra-ui/react'

interface CriticScoreProps {
    score: number
}

const CriticScore = ({ score }: CriticScoreProps) => {
    return (
        <Badge
            fontSize={14}
            paddingX={2}
            borderRadius={4}
            colorScheme={score > 75 ? 'green' : score > 60 ? 'yellow' : 'red'}
        >
            {score}
        </Badge>
    )
}

export default CriticScore
