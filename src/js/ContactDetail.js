import React from 'react';
import PropTypes from 'prop-types'


export default class ContactDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            name: '',
            phone: '',
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleEnterPress = this.handleEnterPress.bind(this);
    }

    handleToggle() {
        if (!this.state.isEdit) {
            this.setState({
                name: this.props.contact.name,
                phone: this.props.contact.phone,
            })
        }
        else {
            this.handleEdit();
        }
        console.log(this.state.isEdit);
        this.setState({
            isEdit: !this.state.isEdit,
        })

    }

    handleChange(hc) {
        let nextState = {};
        nextState[hc.target.name] = hc.target.value;
        this.setState(nextState)
    }

    handleEdit(he) {
        this.props.onEdit(this.state.name, this.state.phone);
    }

    handleEnterPress(hep) {
        if (hep.charCode === 13) {
            this.handleToggle();
        }
    }

    render() {
        const detail = (
            <div>
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p>
            </div>
        );
        const blank = (<div>Blank</div>);
        const edit = (
            <div>
                <p>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        onKeyPress={this.handleEnterPress} />
                </p>
                <p>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        onKeyPress={this.handleEnterPress} />
                </p>
            </div>
        );
        const view = this.state.isEdit ? edit : detail;

        return (
            <div>
                <h2>Details</h2>
                {this.props.isSelected ? view : blank}
                <p>
                    <button onClick={this.handleToggle}>
                        {this.state.isEdit ? 'OK' : 'Edit'}
                    </button>
                    <button onClick={this.props.onRemove}>Remove</button>
                </p>
            </div>
        );
    }
}

ContactDetail.defaultProps = {
    contact: {
        name: '',
        phone: '',
    },
    onRemove: () => { console.error('onRemove is not defined') },
    onEdit: () => { console.error('onEdit is not defined') },
}

ContactDetail.propTypes = {
    contact: PropTypes.object,
    onRemove: PropTypes.func,
    onEdit: PropTypes.func,
}