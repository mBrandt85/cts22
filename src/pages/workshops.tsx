import { Card, CardAction, CardContent, CardImage, CardTitle, CardTracks, CardTracksItem } from "../components/card";
import { Grid, GridItem } from "../components/grid";
import Layout from "../components/layout";
import { Title } from "../components/typography";
import { getWorkshops } from "../data";

export default function Talks() {
  const workshops = getWorkshops()

  return (
    <Layout title="Workshops">
      <Title size="1.5rem" margin="2rem 0 1rem 0">Workshops</Title>
      <Grid>
        {workshops.map( (workshop , workshopsKey) => (
            <GridItem key={workshopsKey}>
              <Card>
                <img src={require(`../assets/images/${workshop.image}`)} alt={workshop.title} />
                <CardTitle>{workshop.title}</CardTitle>
                <CardContent>{workshop.description}</CardContent>
                <CardContent>{`Prereqs: ${workshop.prereqs}`}</CardContent>
                <CardContent>{`Signup: ${workshop.signuplink}`}</CardContent>
                <CardContent>{`Link: ${workshop.prereqs}`}</CardContent>
                <CardAction>asdf</CardAction>
              </Card>
            </GridItem>
          )
        )}
      </Grid>
    </Layout>
  )
}