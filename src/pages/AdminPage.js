import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {CreatePersonPage} from "./CreatePersonPage";
import {ViewProfilesPage} from "./ViewProfilesPage";
import {ProfilePage} from "./ProfilePage";

export function AdminPage(props){
    const {p, setp} = props;
    return(
      <>
            <Tabs>
                <TabList>
                    <Tab>My profile</Tab>
                    <Tab>Create profile</Tab>
                    <Tab>View profiles</Tab>
                </TabList>
                <TabPanel>
                    <ProfilePage p={p} setp={setp}/>

                </TabPanel>
                <TabPanel>
                    <CreatePersonPage/>
                </TabPanel>
                <TabPanel>
                    <ViewProfilesPage/>
                </TabPanel>


            </Tabs>
      </>
    );
}