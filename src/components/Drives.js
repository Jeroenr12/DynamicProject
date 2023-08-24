import PropTypes from "prop-types";
import {Section} from "./Section";
import {MyCard} from "./MyCard";
import {Button} from "react-bootstrap";
import {ActivateDrive} from "../utilities/DataUtils";
import {useDrivesContext} from "../contexts/DrivesContext";

function DriveButton(props){
    const {onEditDrive} = useDrivesContext();
    const {drive, d, setd} = props;
    if(d != null){
        if(drive.active){
            return(
                <Button disabled>Already started this drive</Button>
            );
        }
        return(
            <Button disabled>Finish active drive first</Button>
        );
    }
    return(
        <Button onClick={() => {onEditDrive(drive, {active: true}); ActivateDrive(drive, setd)}} active>Start drive</Button>
    );
}

function Drive(props){
    const {drive, d, setd} = props;
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
            <div>{drive.pickup}</div>
            <div>{drive.dropoff}</div>
            <div>{status}</div>
            <DriveButton drive={drive} d={d} setd={setd}/>
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

export function Drives(props){
    const {drives, d, setd} = props;
    if(drives.length == 0){
        return(
            <Section>
                <h1>No drives assigned to you!</h1>
                <div>Contact dispatch to get new drives.</div>
            </Section>
        );
    }
    return (
        <Section>
            {drives?.map(drive => <Drive key={drive.id} drive={drive} d={d} setd={setd}/>)}
        </Section>
    );
}

Drives.propTypes = {
  drives: PropTypes.array,
};