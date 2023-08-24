import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {useState} from "react";
import {CreateDrivePage} from "./CreateDrivePage";
import {DispatchDrivesMonitorPage} from "./DispatchDrivesMonitorPage";
import {DriversMonitorPage} from "./DriversMonitorPage";

export function DispatchPage(props){
    const [d, setd] = useState(null);
    return(
        <section>
            <div className="row">
            <div className="col-lg-8 h-100">
                <Tabs>

                    <TabList>
                        <Tab>monitor drivers</Tab>
                        <Tab>Create drive</Tab>

                    </TabList>
                    <TabPanel>
                        <DriversMonitorPage/>
                    </TabPanel>
                    <TabPanel>
                        <CreateDrivePage/>
                    </TabPanel>

                </Tabs>
            </div>
            <div className="col-lg-4 h-100">
                <DispatchDrivesMonitorPage/>
            </div>
            </div>

        </section>
    );
}