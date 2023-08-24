import {AdminPage} from "./AdminPage";
import {DriverPage} from "./DriverPage";
import {DispatchPage} from "./DispatchPage";
import {StatusBlock} from "../components/StatusBlock";
import {useDrivesContext} from "../contexts/DrivesContext";
import {usePersonsContext} from "../contexts/PersonsContext";

export function WorkersPage(props){
    const {p, setp, d, setd} = props;
    const {drives} = useDrivesContext();
    const {onEditPerson} = usePersonsContext();
    const values = drives?.filter(dri => dri.driverid === p.ref.id && dri.active === true);
    if(values != null){
        setd(values[0]);
    }

    if (p.role === "ADMIN"){
        return(
            <section>
                <StatusBlock p={p} setp={setp}/>
                <AdminPage p={p} setp={setp}/>
            </section>
        );
    }

    if (p.role === "DISPATCH"){
        return(
            <section>
                <StatusBlock p={p} setp={setp}/>
                <DispatchPage p={p} setp={setp}/>
            </section>

        );
    }

    if (p.role === "DRIVER"){
        return(
            <section>
                <StatusBlock p={p} setp={setp} d={d}/>
                <DriverPage p={p} setp={setp} d={d} setd={setd}/>
            </section>
        );
    }
    return(
      <div>there was a fault with your role, please contact the admin</div>
    );
}