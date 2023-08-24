import {Section} from "./Section";
import PropTypes, {string} from "prop-types";
import {MyCard} from "./MyCard";

function Drive(props){
    const {drive, person, search} = props;
    if(!person[0].name.toLowerCase().includes(search.toLowerCase())){
        return( <></>);
    }
    let status;
    if(drive.droppedoff){
        status = "Finished";
    }else if(drive.pickedup){
        status = "Picked up";
    }else if(drive.active){
        status = "On the way to pickup";
    }else{
        status = "Not Started";
    }

    return(
        <MyCard classname="border-1 border-dark m-3">
            <h3>{drive.id}</h3>
            <div>Pickup: {drive.pickup}</div>
            <div>dropoff: {drive.dropoff}</div>
            <div>status: {status}</div>
            <div>driver: {person[0].name}</div>
            <div>status: {person[0].status}</div>
        </MyCard>
    );
}

Drive.propTypes = {
    drive: PropTypes.shape({
        id: PropTypes.string.isRequired,
        active: PropTypes.bool,
        driverid: PropTypes.string,
        pickup: PropTypes.string,
        dropoff: PropTypes.string,
        pickedup: PropTypes.bool,
        droppedoff: PropTypes.bool
    })
};

export function DispatchDrives(props){
    const {persons, drives, search} = props;
    if(drives.length == 0){
        return(
            <Section>
                <h1>No drives are active!</h1>
            </Section>
        );
    }
    return (
        <Section>
            {drives?.map(drive => <Drive key={drive.id} drive={drive} person={persons?.filter(per => per.ref.id === drive.driverid)} search={search}/>)}
        </Section>
    );
}

DispatchDrives.propTypes = {
    drives: PropTypes.array,
};