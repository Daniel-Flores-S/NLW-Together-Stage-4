import { BrowserRouter, Route, Switch} from "react-router-dom";

import { Home } from "pages/Home/Home";
import { NewRoom } from "pages/NewRoom/NewRoom";
import { Room } from "pages/Room/Room";
import { AuthContextProvider } from "contexts/AuthContexts";

function App() {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/room/new" exact component={NewRoom} />
                    <Route path="/room/:id" component={Room} />
                </Switch>

            </AuthContextProvider>
        </BrowserRouter>
    );
}

export default App;
