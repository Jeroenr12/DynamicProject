import {Section} from "../components/Section";
import {AdminPage} from "./AdminPage";
import {DriverPage} from "./DriverPage";
import {DispatchPage} from "./DispatchPage";

export function WorkersPage(props){
    const {p, setp} = props;
    if (p.role === "ADMIN"){
        return(
            <section>
                <AdminPage p={p} setp={setp}/>
            </section>
        );
    }

    if (p.role === "DISPATCH"){
        return(
            <section>
                <DispatchPage p={p} setp={setp}/>
            </section>

        );
    }

    if (p.role === "DRIVER"){
        return(
            <section>
                <DriverPage p={p} setp={setp}/>
            </section>
        );
    }
    return(
      <div>there was a fault with your role, please contact the admin</div>
    );
}