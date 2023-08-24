import {useState} from "react";


export function ChangeStatus(p, setp, newStatus){
    const person = {name: p.name, role: p.role, status: newStatus, ref: p.ref};
    setp(person);
    return true;
}

export function ActivateDrive(drive, setd){
    setd(drive);
    return true;
}

export function ChangeDriveStatus(d, setd, load, unload, cmr){
    const drive = {ref: d.ref, active: d.active, driverid: d.driverid, dropoff: d.dropoff, pickup: d.pickup, droppedoff: unload, pickedup: true, cmr: cmr};
    if(unload){
        setd(null);
        return true;
    }

    setd(drive);

    return true;
}

