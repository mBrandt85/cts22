import Layout from "../components/layout"
import { Title } from "../components/typography"
import { getKeynotes } from "../data"
import { Card, CardTitle, CardContent } from "../components/card"
import { Grid, GridItem } from "../components/grid"

export default function Keynotes() {
  const keynotes = getKeynotes()
  
  return (
    <Layout title="Keynotes">
      <Title size="1.5rem" margin="2rem 0 1rem 0">Keynotes</Title>
      <Grid>
        {keynotes.map( (keynote) =>
          keynote.speakers.map((speaker, speakerKey) => (
            <GridItem key={speakerKey}>
              <Card>
                <img src={require(`../assets/images/${speaker.image}`)} alt={keynote.title} />
                <CardTitle>{speaker.name}</CardTitle>
                <CardContent>{keynote.title}</CardContent>
                <CardContent>{keynote.description}</CardContent>
              </Card>
            </GridItem>
          )
        ))}
      </Grid>
    </Layout> )
}

