import React from 'react';
import PropTypes from 'prop-types';

export default class ContactCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleEnterPress = this.handleEnterPress.bind(this);
    }

    handleChange(hc) {
        let nextState = {};
        nextState[hc.target.name] = hc.target.value;
        this.setState(nextState);
    }

    handleClick() {
        const contact = {
            name: this.state.name,
            phone: this.state.phone,
        };
        this.props.onCreate(contact);
        this.setState({
            name: '',
            phone: '',
        })
    }

    handleEnterPress(hep) {
        if (hep.charCode === 13) {       // 13 이란 ENTER을 의미
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>Create Contact</h1>
                <p>
                    <input type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        onKeyPress={this.handleEnterPress} />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        onKeyPress={this.handleEnterPress} />
                </p>
                <button onClick={this.handleClick}>Create</button>
            </div>
        );
    }

}

ContactCreate.propTypes = {
    onCreate: PropTypes.func
};

ContactCreate.defaultProps = {
    onCreate: () => {
        console.error('onCreate is not defined');
    }
};