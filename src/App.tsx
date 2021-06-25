import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "pages/Home/Home";
import { NewRoom } from "pages/NewRoom/NewRoom";



function App() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/room/new"  component={NewRoom}/>
        </BrowserRouter>
    );
}

export default App;