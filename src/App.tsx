import { createContext, useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "pages/Home/Home";
import { NewRoom } from "pages/NewRoom/NewRoom";
import { AuthContextProvider } from "contexts/AuthContexts";

function App() {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <Route path="/" exact component={Home} />
                <Route path="/room/new" component={NewRoom} />
            </AuthContextProvider>
        </BrowserRouter>
    );
}

export default App;
