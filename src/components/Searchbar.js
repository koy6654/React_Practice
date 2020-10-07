import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookname: '',
            bookcode: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(hc) {
        let nextState = {};
        nextState[hc.target.name] = hc.target.value;
        this.setState(nextState);
    }



    render() {
        return (
            <div>
                <div style={{ textAlign: 'center' }}>
                    <h3>Book Name</h3>
                    <input
                        type='text'
                        name='bookname'
                        placeholder='Name'
                        value={this.state.bookname}
                        onChange={this.handleChange}
                    />
                    <button onClick={<Mapping />}>Search</button>
                </div>

                <br /><br />
                <div style={{ textAlign: 'center' }} >
                    <h3>Book Code</h3>
                    <input
                        type='text'
                        name='bookcode'
                        placeholder='Code'
                        value={this.state.bookcode}
                        onChange={this.handleChange}
                    />
                    <button>Search</button>
                </div>
            </div>
        );
    }
}



export class Mapping extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                { bookname: 'a책', bookcode: 'aaaaa' },
                { bookname: 'b책', bookcode: 'bbbbb' },
                { bookname: 'c책', bookcode: 'ccccc' },
                { bookname: 'd책', bookcode: 'ddddd' },
                { bookname: 'e책', bookcode: 'eeeee' },
            ]
        };
        this.mapToComponent = this.mapToComponent.bind(this);
    }

    mapToComponent(data) {
        return data.map((data) => {
            const newData = {};
            return (
                <div>
                    {newData[data.bookname]} {newData[data.bookcode]}
                </div>
            );
        })
    };

    render() {
        return (
            <>
                {this.mapToComponent(this.state.books)}
            </>
        );
    }
}