import { Container, Grid, Item } from "semantic-ui-react";

export default function Experience() {
    return (
        <Container>
            <h1>Experience</h1>
            <Item.Group>
                <Item>
                    <Item.Content>
                        <Item.Header >Fast Enterprises</Item.Header>
                        <Item.Meta>Software Engineering Consultant</Item.Meta>
                        <Item.Description style={{marginLeft: '1em'}}>
                            <li>Manage and optimize a DMV software system serving over 9.1 million users in the states of Minnesota and Utah, resulting in increased efficiency and user satisfaction.</li>
                            <li>Design, develop, document, test and debug new and existing components of the system.</li>
                            <li>Consult directly with clients and involved parties to implement discussed project progress 
                                and desired functionalities - ensuring active involvement internally and externally, as well as continuous process improvements in the work pipeline.</li>
                            <li>Respond to client concerns in a timely manner and provide updates throughout resolution of issues.</li>
                            <li>Update the system consistently with improved and new functionality related to bug fixes, QoL improvements, and legislation changes.</li>
                            <li>Communicate between software customers and development team, relating feedback and concerns for key project issues and future patch cycles.</li>
                            <li>Administered constant support directly with end-users of our DMV system in Maryland during rollout of a new service product.</li>
                            <li>Coordinated and organized support by reporting errors, finding workarounds for known errors, and keeping the DMV employees and 
                                customers satisfied.</li>
                        </Item.Description>
                        <Item.Extra>March 2021 - Current</Item.Extra>
                    </Item.Content>
                </Item>

                <Item>
                    <Item.Content>
                        <Item.Header>Western Illinois University</Item.Header>
                        <Item.Meta>Technical Assistant</Item.Meta>
                        <Item.Description style={{marginLeft: '1em'}}>
                            <li>Supported computer hardware and software for employees and computer labs.</li>
                            <li>Performed repairs, maintenance, and upgrades to Mac and IBM operating systems.</li>
                            <li>Managed website and social networking pages, blogs, and other social media.</li>
                        </Item.Description>
                        <Item.Extra>January 2019 - December 2020</Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Container>
    )
}