import { Container } from "semantic-ui-react";
import { Document, Page } from 'react-pdf';

export default function Resume(){
    return (
        <Container>
            <Document file="">
                <Page />
            </Document>
        </Container>
    )
}