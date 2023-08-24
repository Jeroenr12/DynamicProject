import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {ProfilePage} from "./ProfilePage";
import {DrivesPage} from "./DrivesPage";
import {CurrentDrivePage} from "./CurrentDrivePage";

export function DriverPage(props){
    const {p, setp, d, setd} = props;
    return(
        <>
            <Tabs>
                <TabList>
                    <Tab>My profile</Tab>
                    <Tab>My drives</Tab>
                    <Tab>current drive</Tab>
                </TabList>
                <TabPanel>
                    <ProfilePage p={p} setp={setp} d={d} setd={setd}/>

                </TabPanel>
                <TabPanel>
                    <DrivesPage p={p} d={d} setd={setd}/>
                </TabPanel>
                <TabPanel>
                    <CurrentDrivePage p={p} d={d} setd={setd}/>
                </TabPanel>


            </Tabs>
        </>
    );
}
