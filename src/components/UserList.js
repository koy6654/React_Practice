import React, { Component } from 'react';
import { Content, Row, Col, Box } from 'adminlte-2-react';

export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userlist: [],
        }
        this.Mapping = this.Mapping.bind(this)
        this.Test = this.Test.bind(this)
    }

    // componentWillMount() {
    //     // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //     // const userlist_url = 'http://localhost:5000/userlist';
    //     fetch('http://localhost:5000/userlist')
    //         .then(
    //             res =>
    //                 res.json()
    //         )
    //         .then(
    //             data => {
    //                 console.log(...data)
    //                 this.setState({
    //                     // userlist: [this.state.userlist.concat(...data)],
    //                     userlist: [...data],
    //                 })
    //                 console.log(this.state)
    //             }
    //         );
    // }

    componentDidMount() {
        fetch('http://localhost:5000/userlist')
            .then(
                res =>
                    res.json()
            )
            .then(
                data => {
                    // console.log(data)
                    this.setState({
                        userlist: this.state.userlist.concat(...data),
                    })
                    console.log(this.state)
                }
            );
    }

    Mapping() {
        const users = this.state.userlist;           // {} 의미
        console.log(users)

        const userList = users.map((users, index) => {
            // <MappingPresent username={users.username} password={users.password} email={users.email} />

            return (
                <div>
                    {/* <p>Username = {users.username}</p>
                <p>Email = {users.email}</p>
                <p>Password = {users.password}</p> */}
                </div>
            )
        })
        return userList
    }

    Test() {
        return (
            <div>
                대체 왜 안돼 미치겠다
            </div>
        )
    }

    render() {
        return (
            <Content title='UserList'>
                <Row>
                    <Col>
                        <Box>
                            {this.state.userlist.map((users, index) => {
                                return <MappingPresent username={users.username} password={users.password} email={users.email} />
                            })}
                        </Box>
                    </Col>
                </Row>
            </Content>
        );
    }
}

export class MappingPresent extends Component {
    render() {
        return (
            <div>
                <p>Username = {this.props.username}</p>
                <p>Email = {this.props.email}</p>
                <p>Password = {this.props.password}</p>
                <p>------------------------------------------------</p>
            </div>
        );
    }
}
