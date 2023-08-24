import {Card} from "react-bootstrap";

export function MyCard(props) {
    const {children} = props;
    return <Card className="m-2 p-2 shadow-sm text-center w-100">
        {children}
    </Card>;
}