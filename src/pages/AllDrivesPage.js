import {useDrivesContext} from "../contexts/DrivesContext";
import {usePersonsContext} from "../contexts/PersonsContext";
import {useState} from "react";
import {Form} from "react-bootstrap";
import {DispatchDrives} from "../components/DispatchDrives";

export function AllDrivesPage(){
    const {drives} = useDrivesContext();
    const {persons} = usePersonsContext();
    const [search, setSearch] = useState("");


    return(
        <section className="ms-5">
            <Form className="ps-2">
                <Form.Label className="fs-4 fw-bold">search</Form.Label>
                <Form.Control
                    value={search}
                    onChange={e => setSearch(e.target.value)}/>
            </Form>
            <div className="me-2">
                <DispatchDrives persons={persons}  drives={drives} search={search}/>
            </div>

        </section>
    );
}