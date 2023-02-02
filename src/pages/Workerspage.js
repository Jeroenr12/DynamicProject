import {Section} from "../components/Section";
import {AdminPage} from "./AdminPage";

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
            <div>hello master</div>

        );
    }

    if (p.role === "DRIVER"){
        return(
            <div>hello master</div>
        );
    }
    return(
      <div>there was a fault with your role, please contact the admin</div>
    );
}