import { Card, Icon } from "semantic-ui-react";
export default function ProjectDashboard() {
    return (
        <Card.Group style={{marginLeft: '10px'}}>
            <Card>
                <Card.Content>
                    <Card.Header>Portfolio</Card.Header>
                    <Card.Description>
                        This portfolio was created to display all there is to know about me!
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                        <Icon name='clipboard outline' />
                        HTML, CSS (Semantic-UI), TS, React
                </Card.Content>
            </Card>

            <Card>
                <Card.Content>
                    <Card.Header>MangaBu</Card.Header>
                    <Card.Description>
                        This project was developed with the intention to be able to read downloaded manga in Japanese 
                        and also be able to translate characters directly within my app.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                        <Icon name='clipboard outline' />
                        C# / WPF
                </Card.Content>
            </Card>

            <Card>
                <Card.Content>
                    <Card.Header>FinanceFinder</Card.Header>
                    <Card.Description>
                        This project was designed to increase the ease and efficiency of keeping track of my finances. 
                        It allows me to input an American Express or Chase credit card statement, categorizes the statement items, and then sums each category.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                        <Icon name='clipboard outline' />
                        C#
                </Card.Content>
            </Card>
        </Card.Group>

    )
}