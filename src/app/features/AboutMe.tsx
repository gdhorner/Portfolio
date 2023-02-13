import { Container, Image, Grid } from "semantic-ui-react";
import img from '../../assets/me.jpg'

export default function AboutMe() {
    return (
        <Container id="home">
            <Grid divided>
                <Grid.Row>
                    <Grid.Column width='8'>
                        <h1>About me</h1>
                        <p style={{ fontSize: '16px' }}>I have a growth mindset and have always worked extremely hard to reach the goals that I have set for myself.
                            This is something you can see in my professional work, projects, hobbies and interests. </p>
                    </Grid.Column >
                    <Grid.Column width='8'>
                    <Image floated='right' src={img} size='medium' circular/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}