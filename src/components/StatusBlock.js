import {usePersonsContext} from "../contexts/PersonsContext";
import {Button} from "react-bootstrap";


export function StatusBlock(props){
    const {p, setp, d} = props;

    return(
        <section className="p-4">
            <h1>Active: {p.name}</h1>
            <Button onClick={() => setp(null)}>Logout</Button>
        </section>
    );
}

export function DriverStatusBlock(props){
    const {p, setp, d} = props;
    const {onEditPerson} = usePersonsContext();
    if(d != null){
        return(
            <section className="p-4 bg-secondary bg-opacity-25 border-bottom-dark d-inline-flex justify-content-between w-100">
                <div className="fw-bold fs-3">Active: {p.name}</div>
                <div className="fw-bold fs-3">Status: {p.status}</div>
                <div className="fw-bold fs-3">Drive: {d.id}</div>
                <Button className="fw-bold fs-5" onClick={() => {onEditPerson(p, {status: "NOT ACTIVE"}); setp(null);}}>Logout</Button>
            </section>
        );
    }
        return(
            <section className="p-4">
                <h1>Active: {p.name}</h1>
                <div>Status: {p.status}</div>
                <div>Drive: No drive active</div>
                <Button onClick={() => {onEditPerson(p, {status: "NOT ACTIVE"}); setp(null);}}>Logout</Button>
            </section>
        );

}

