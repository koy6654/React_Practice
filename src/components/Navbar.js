import React, { Component } from 'react';
import { Navbar } from 'adminlte-2-react';


const { Entry } = Navbar;


export default class NavbarCore extends Component {
    render() {
        return (
            <>
                <Entry icon="fas-envelope">
                </Entry>
                <Entry icon="fas-bell">

                </Entry>
                <Entry icon="far-flag">

                </Entry>
                <Entry icon="fas-power-off" />
            </>
        );
    }
}