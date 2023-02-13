import { Container, Grid } from "semantic-ui-react";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import ProjectDashboard from "./ProjectDashboard";

export default function HomePage() {
    return (
        <Container fluid className="homePageStyle">
            <Grid>
                <Grid.Row id="aboutme">
                    <AboutMe />
                </Grid.Row>
                <Grid.Row id="experience">
                    <Experience />
                </Grid.Row>
                <Grid.Row id="projects">
                    <ProjectDashboard />
                </Grid.Row>
            </Grid>
        </Container>
    )
}