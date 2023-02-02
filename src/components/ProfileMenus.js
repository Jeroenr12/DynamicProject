import {updateDoc} from "firebase/firestore";
import {Section} from "./Section";
import {Button} from "react-bootstrap";

async function ChangeStatus(p, setp, newStatus){
    const person = {name: p.name, role: p.role, status: newStatus, ref: p.ref};
    try{
        await updateDoc(p.ref, {status: newStatus});
        setp(person);
    } catch (e){
        console.log(`ERROR Status edit NOT done correctly: ${e}`)
    }
    return true;
}


export function DriverMenu(props){
    const {p, setp} = props;
    console.log(p.name);
    return(
        <Section>
            <Button onClick={() => ChangeStatus(p, setp, "ACTIVE")}>ACTIVE</Button>
            <Button onClick={() => ChangeStatus(p, setp, "DRIVING")}>DRIVING</Button>
            <Button onClick={() => ChangeStatus(p, setp, "LOADING")}>LOADING</Button>
            <Button onClick={() => ChangeStatus(p, setp, "UNLOADING")}>UNLOADING</Button>
            <Button onClick={() => ChangeStatus(p, setp, "RESTING")}>RESTING</Button>
        </Section>
    );
}

export function OfficeMenu(props){

    const {p, setp} = props;
    console.log(p.name);
    return(
        <Section>
            <Button onClick={() => ChangeStatus(p, setp, "ACTIVE")}>ACTIVE</Button>
        </Section>
    );
}