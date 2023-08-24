import {DriverMenu} from "../components/ProfileMenus";

export function ProfilePage(props){
    const {p, setp, d, setd} = props;
        return(
            <DriverMenu p={p} setp={setp} d={d} setd={setd}/>
        );
}