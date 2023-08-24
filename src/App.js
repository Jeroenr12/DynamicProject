import './App.css';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./services/firebase";
import 'react-tabs/style/react-tabs.css';
import {useState} from "react";
import {PersonSelectorPage} from "./pages/PersonSelectorPage";
import {Section} from "./components/Section";
import {Row} from "react-bootstrap";
import {WorkersPage} from "./pages/Workerspage";
import {MessageProvider} from "./contexts/messageContext";
import {DrivesProvider} from "./contexts/DrivesContext";
import {PersonsProvider} from "./contexts/PersonsContext";

function ProvidedApp(){
    const [p, setp] = useState(null);
    const [d, setd] = useState(null);

    if(p == null){
        return(
            <Section>
                <PersonSelectorPage p={p} setp={setp}/>
            </Section>
        );
    }

    return (
        <>
            <Row>
                <WorkersPage p={p} setp={setp} d={d} setd={setd}/>
            </Row>
        </>
    );
}


function App() {
    return(
        <MessageProvider>
            <PersonsProvider>
                <DrivesProvider>
                    <ProvidedApp/>
                </DrivesProvider>
            </PersonsProvider>
        </MessageProvider>
    );
}

export default App;
