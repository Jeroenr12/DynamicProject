import {useDrivesContext} from "../contexts/DrivesContext";
import {useState} from "react";
import {Form} from "react-bootstrap";
import {DispatchDrives} from "../components/DispatchDrives";
import {usePersonsContext} from "../contexts/PersonsContext";


export function DispatchDrivesMonitorPage(props){
    const {drives} = useDrivesContext();
    const {persons} = usePersonsContext();
    const [search, setSearch] = useState("");


    return(
        <section className="me-5">
            <Form>
                <Form.Label>search</Form.Label>
                <Form.Control
                    value={search}
                    onChange={e => setSearch(e.target.value)}/>
            </Form>
            <DispatchDrives persons={persons}  drives={drives?.filter(dri => dri.active)} search={search}/>
        </section>
            );
}
