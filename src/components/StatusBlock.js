import {usePersonsContext} from "../contexts/PersonsContext";
import {Button} from "react-bootstrap";


export function StatusBlock(props){
    const {p, setp, d} = props;
    const {onEditPerson} = usePersonsContext();

    if(p.role === "DRIVER"){
        if(d != null){
            return(
                <section className="p-4">
                    <h1>Active: {p.name}</h1>
                    <div>Status: {p.status}</div>
                    <div>Drive: {d.id}</div>
                    <Button onClick={() => {onEditPerson(p, {status: "NOT ACTIVE"}); setp(null);}}>Logout</Button>
                </section>
            );
        }else{
            return(
                <section className="p-4">
                    <h1>Active: {p.name}</h1>
                    <div>Status: {p.status}</div>
                    <div>Drive: No drive active</div>
                    <Button onClick={() => {onEditPerson(p, {status: "NOT ACTIVE"}); setp(null);}}>Logout</Button>
                </section>
            );
        }
    }

    return(
        <section className="p-4">
            <h1>Active: {p.name}</h1>
            <Button onClick={() => setp(null)}>Logout</Button>
        </section>
    );
}


