import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {ProfilePage} from "./ProfilePage";
import {CreatePersonPage} from "./CreatePersonPage";
import {ViewProfilesPage} from "./ViewProfilesPage";
import {useState} from "react";
import {DrivesPage} from "./DrivesPage";

export function DriverPage(props){
    const {p, setp} = props;
    const [d, setd] = useState(null);
    return(
        <>
            <Tabs>
                <TabList>
                    <Tab>My profile</Tab>
                    <Tab>My drives</Tab>
                    <Tab>current drive</Tab>
                </TabList>
                <TabPanel>
                    <ProfilePage p={p} setp={setp}/>

                </TabPanel>
                <TabPanel>
                    <DrivesPage p={p} d={d} setd={setd}/>
                </TabPanel>
                <TabPanel>
                </TabPanel>


            </Tabs>
        </>
    );
}