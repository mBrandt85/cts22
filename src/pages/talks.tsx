import { Card, CardAction, CardContent, CardImage, CardTitle, CardTracks, CardTracksItem } from "../components/card";
import { Grid, GridItem } from "../components/grid";
import Layout from "../components/layout";
import { Title } from "../components/typography";
import { getTalks } from "../data";

export default function Talks() {
  const talks = getTalks()

  return (
    <Layout title="News">
      <Title size="1.5rem" margin="2rem 0 1rem 0">Speakers</Title>
      <Grid>
        {talks.map(({ speakers, title, tracks }, talksKey) => 
          speakers.map(({ name, image }) => (
            <GridItem key={talksKey}>
              <Card>
                <img src={require(`../assets/images/${image}`)} alt={name} />
                <CardTitle>{name}</CardTitle>
                <CardContent>{title}</CardContent>
                <CardAction>asdf</CardAction>
                <CardTracks>
                  {tracks.map((track, tracksKey) => <CardTracksItem key={`${talksKey}-${tracksKey}`}>
                    #{track}
                  </CardTracksItem>)}
                </CardTracks>
              </Card>
            </GridItem>
          ))
        )}
      </Grid>
    </Layout>
  )
}