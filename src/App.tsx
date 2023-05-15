import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "main aside"`,
            }}
        >
            <GridItem gridArea="nav" bg="coral">
                nav
            </GridItem>
            <Show above="lg">
                <GridItem gridArea="aside" bg="gold">
                    aside
                </GridItem>
            </Show>
            <GridItem gridArea="main" bg="dodgerblue">
                main
            </GridItem>
        </Grid>
    )
}

export default App
