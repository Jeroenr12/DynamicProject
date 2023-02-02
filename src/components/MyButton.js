import React from 'react';
import {Button} from "react-bootstrap";

export function MyButton(props) {
    const {onClick, children} = props;
    return (
        <Button variant="primary" size="md" className="ms-2 mt-1"
                onClick={onClick}>
            {children}
        </Button>
    );
}