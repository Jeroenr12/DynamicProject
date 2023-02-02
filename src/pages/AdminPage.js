import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

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

                </TabPanel>
                <TabPanel>
                    <CreateProfilePage/>

                </TabPanel>
                <TabPanel>

                </TabPanel>


            </Tabs>
      </>
    );
}