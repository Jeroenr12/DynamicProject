import {useState} from "react";
import {Form} from "react-bootstrap";
import {Workers} from "../components/Persons";
import {usePersonsContext} from "../contexts/PersonsContext";
import {CreatePersonModal} from "../components/Modals";

export function ViewProfilesPage(props){
    const {p} = props;
    const [search, setSearch] = useState("");
    const [radio, setRadio] = useState("");
    const {persons} = usePersonsContext();

    const onChangeRadio = ({target:{value}}) => {
      setRadio(value);
    };

    return (
        <div className="mx-3">
            <div className="row p-3  me-3">
                <div className="col-lg-10">
                    <Form className="w-auto">
                        <Form.Label className="fs-5">search</Form.Label>
                        <Form.Control
                            className="mb-3 w-auto"
                            value={search}
                            onChange={e => setSearch(e.target.value)}/>
                        <div key={'inline-radio'}>
                            <Form.Check inline={true} type="radio" label="All" name="group1" value={""} onChange={onChangeRadio}/>
                            <Form.Check inline={true} type="radio" label="Driver" name="group1" value={"DRIVER"} onChange={onChangeRadio}/>
                            <Form.Check inline={true} type="radio" label="Dispatch" name="group1" value={"DISPATCH"} onChange={onChangeRadio}/>
                            <Form.Check inline={true} type="radio" label="Admin" name="group1" value={"ADMIN"} onChange={onChangeRadio}/>
                        </div>

                    </Form>
                </div>
                <div className="col-lg-2">
                    <CreatePersonModal/>
                </div>
            </div>
            <div className="row me-3">
            <Workers p={p} persons={persons?.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) && (p.role === radio || radio === ""))}
            />
            </div>
        </div>
    )
}