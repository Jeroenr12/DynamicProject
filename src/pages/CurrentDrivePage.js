import {Section} from "../components/Section";


export function CurrentDrivePage(props){
    const {p, d, setd} = props;
    let status = "On the way to pickup";
    if(d == null){
        return(
            <Section>
                <h1>No active drive!</h1>
                <div>Go to my drives to start a new drive.</div>
            </Section>
        );
    }
    if(d.pickedup){
        status = "On the way to dropoff";
    }
    return(
        <Section>
            <h1>ID: {d.id}</h1>
            <div>Pickup: {d.pickup}</div>
            <div>Dropoff: {d.dropoff}</div>
            <div>Status: {status}</div>
        </Section>
    );
}