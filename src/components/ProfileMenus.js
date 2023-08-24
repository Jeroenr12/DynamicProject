import {Section} from "./Section";
import {Button} from "react-bootstrap";
import {ChangeStatus} from "../utilities/DataUtils";
import {LoadingModal, UnloadingModal} from "./Modals";
import {usePersonsContext} from "../contexts/PersonsContext";




export function DriverMenu(props){
    const {p, setp, d, setd} = props;
    const {onEditPerson} = usePersonsContext();
    if(p.status === "NOT ACTIVE"){
        ChangeStatus(p, setp, "ACTIVE");
    }
    return(
        <Section>
            <Button onClick={() => {onEditPerson(p, {status: "DRIVING"}); ChangeStatus(p, setp, "DRIVING");}}>DRIVING</Button>
            <LoadingModal p={p} setp={setp} d={d} setd={setd}/>
            <UnloadingModal p={p} setp={setp} d={d} setd={setd}/>
            <Button onClick={() => {onEditPerson(p, {status: "RESTING"}); ChangeStatus(p, setp, "RESTING");}}>RESTING</Button>
        </Section>
    );
}