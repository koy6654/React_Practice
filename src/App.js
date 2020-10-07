import React, { Component } from 'react';
import AdminLTE, { Content, Navbar, Sidebar } from 'adminlte-2-react';

import NavbarCore from './components/Navbar';
import SidebarCore from './components/Sidebar';

import Home from './screens/Home';
import Introduce from './screens/Introduce';
import Search from './screens/Search';
import FetchTest from './components/fetchTest';
import Register from './screens/Register';
import Login from './screens/Login';
import UserList from './components/UserList';

export default class App extends Component {
    render() {
        return (
            <AdminLTE title={['Library Management']} titleShort='LM' theme='black' browserTitle='Library Management'>
                <Navbar.Core >
                    <NavbarCore />
                </Navbar.Core>
                <Sidebar.Core>
                    <SidebarCore />
                </Sidebar.Core>
                <Home path='/' exact />
                <Introduce path='/introduce' exact />
                <Search path='/search' exact />
                <FetchTest path='/fetchtest' exact />
                <Register path='/register' exact />
                <Login path='/login' exact />
                <UserList path='/userlist' exact />
                <Content>

                </Content>
            </AdminLTE>
        );
    }
} 