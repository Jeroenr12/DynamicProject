import {Drives} from "../components/Drives";
import {useDrivesContext} from "../contexts/DrivesContext";
import {Section} from "../components/Section";


export function DrivesPage(props){
    const {p, d, setd} = props;
    const {drives} = useDrivesContext();
    return(
        <>
            <Drives drives={drives?.filter(dri => dri.driverid === p.ref.id && dri.droppedoff == false)} d={d} setd={setd}/>
        </>
    );
}