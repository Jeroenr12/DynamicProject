import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {ViewProfilesPage} from "./ViewProfilesPage";
import {CreateDrivePage} from "./CreateDrivePage";
import {DispatchDrivesMonitorPage} from "./DispatchDrivesMonitorPage";

export function AdminPage(props){
    const {p, setp} = props;
    return(
      <section >
            <Tabs>
                <TabList>
                    <Tab>View profiles</Tab>
                    <Tab>Create drive</Tab>
                </TabList>
                <TabPanel>
                    <ViewProfilesPage p={p}/>
                </TabPanel>
                <TabPanel>
                    <div className="row">
                        <div className="col-lg-8 h-100">
                            <CreateDrivePage/>
                        </div>
                        <div className="col-lg-4 h-100">
                            <DispatchDrivesMonitorPage/>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
      </section>
    );
}