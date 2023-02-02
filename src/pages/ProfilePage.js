import {DriverMenu, OfficeMenu} from "../components/ProfileMenus";

export function ProfilePage(props){
    const {p, setp} = props;
    if(p.role === "DRIVER"){
        return(
            <DriverMenu p={p} setp={setp}/>
        );
    }
    else{
        return(
            <OfficeMenu p={p} setp={setp}/>
        )
        ;
    }

}