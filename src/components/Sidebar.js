import React, { Component } from 'react';
import { Sidebar } from 'adminlte-2-react';

const { Item, Header, Searchbar } = Sidebar;

export default class SidebarCore extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <>
                <Item icon='fas-lock-open' text='Login' to='/login' />
                <Item icon='fas-user-plus' text='Register' to='/register' />
                <Header text='MAIN INTERFACE' labels={{ type: 'white', text: 4 }} />
                <Item icon='fas-home' text='Home' to='/' />
                <Item icon='fas-atlas' text='Introduce' to='/introduce' />
                <Item icon='fas-search' text='Search' to='/search' />
                <Item icon='fas-vial' text='FetchTest' to='/fetchtest' />
                <Item icon='fas-list' text='UserList' to='/userlist' />
            </>
        );
    }
}