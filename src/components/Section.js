import {Container, Row} from "react-bootstrap";
import PropTypes from "prop-types";

function SectionContent(props) {
    const {children} = props;
    return (
        <Container>
            <Row>
                {children}
            </Row>
        </Container>
    );
}

export function Section(props) {
    const {children} = props;
    return (
        <div className="my-3 p-1 rounded shadow-sm" style={{backgroundColor: "lavender"}}>
            <SectionContent>{children}</SectionContent>
        </div>
    );
}

Section.propTypes = {
    children: PropTypes.node
}