import React from 'react';
import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import CounterPage from "./pages/counterPage/CounterPage";
import UsersPage from "./pages/usersPage/UsersPage";

function App() {
    return (
        <div className="App">
            {/*<MainPage />*/}
            {/*/!*<AboutPage/>*!/*/}
            {/*<ContactsPage/>*/}
            {/*<CounterPage/>*/}
            <UsersPage/>
        </div>
    );
}

export default App;

