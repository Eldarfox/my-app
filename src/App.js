import React from 'react';
import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import CounterPage from "./pages/counterPage/CounterPage";
import UsersPage from "./pages/usersPage/UsersPage";
import UserDetail from "./pages/usersPage/UserDatail";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            {/*<MainPage />*/}
            {/*/!*<AboutPage/>*!/*/}
            {/*<ContactsPage/>*/}
            {/*<CounterPage/>*/}
            <Router>
                <Routes>
                    <Route path="/" element={<UsersPage />} />
                    <Route path="/user/:id" element={<UserDetail />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

