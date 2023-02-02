import {ViewProfilesPage} from "./ViewProfilesPage";
import {ProfilePage} from "./ProfilePage";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {useState} from "react";
import {CreateDrivePage} from "./CreateDrivePage";

export function DispatchPage(props){
    const {p, setp} = props;
    const [d, setd] = useState(null);
    return(
        <>
            <Tabs>
                <TabList>
                    <Tab>My profile</Tab>
                    <Tab>Create drive</Tab>
                    <Tab>Assign drive</Tab>
                    <Tab>see active drives</Tab>
                    <Tab>see all drives</Tab>
                    <Tab>monitor drivers</Tab>
                </TabList>
                <TabPanel>
                    <ProfilePage p={p} setp={setp}/>
                </TabPanel>
                <TabPanel>
                    <CreateDrivePage d={d} setd={setd}/>
                </TabPanel>
                <TabPanel>
                    <AssignDriverPage d={d} setd={setd}/>

                </TabPanel>
                <TabPanel>

                </TabPanel>
                <TabPanel>

                </TabPanel>
                <TabPanel>

                </TabPanel>


            </Tabs>
        </>
    );
}