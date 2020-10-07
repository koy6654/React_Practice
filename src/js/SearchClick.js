import React from 'react';
import ContactDetail from './ContactDetail';
import update from 'react-addons-update';

import ContactCreate from './ContactCreate';

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            clickKey: -1,
            userData: [
                { name: 'aaaaa', phone: '010-0000-0000' },
                { name: 'bbbbb', phone: '010-1000-0000' },
                { name: 'ccccc', phone: '010-2000-0000' },
                { name: 'ddddd', phone: '010-3000-0000' },
            ]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentWillMount() {
        const userData = localStorage.userData;

        if (userData) {
            this.setState({
                userData: JSON.parse(userData),
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (JSON.stringify(prevState.userData) !== JSON.stringify(this.state.userData)) {
            localStorage.userData = JSON.stringify(this.state.userData);
        }
    }

    handleChange(hc) {
        this.setState({
            keyword: hc.target.value,
        })
    }

    handleClick(hc) {
        this.setState({
            clickKey: hc,
        })
        console.log(hc, 'is selected');
    }

    handleCreate(e) {
        this.setState({
            userData: update(this.state.userData, { $push: [e] })
        })
    }

    handleRemove() {
        if (this.state.clickKey < 0) { return; }
        this.setState({
            userData: update(this.state.userData, { $splice: [[this.state.clickKey, 1]] })
        })
    }

    handleEdit(name, phone) {
        this.setState({
            userData: update(this.state.userData,
                {
                    [this.state.clickKey]: {
                        name: { $set: name },
                        phone: { $set: phone }
                    }
                })
        })
    }

    render() {
        const mapToComponent = (data) => {
            data.sort();
            data = data.filter(
                (keyfilter) => {
                    return keyfilter.name.indexOf(this.state.keyword) > -1;
                }
            )
            return data.map((dataArray, i) => {
                return (<MappingOutput name={dataArray.name} phone={dataArray.phone} onClick={() => this.handleClick(i)} />);
            })
        };

        return (

            <div>
                <div>
                    Numbers
                </div>
                <div>
                    <input name="keyword" placeholder="Search" value={this.state.keyword} onChange={this.handleChange} ></input>
                </div>
                <div>
                    {mapToComponent(this.state.userData)}
                </div>
                <ContactDetail
                    isSelected={this.state.clickKey !== -1}
                    contact={this.state.userData[this.state.clickKey]}
                    onRemove={this.handleRemove}
                    onEdit={this.handleEdit} />
                <ContactCreate onCreate={this.handleCreate} />
            </div>
        );
    }
}

export class MappingOutput extends React.Component {
    render() {
        return (
            <div>
                <div onClick={this.props.onClick}>
                    {this.props.name}
                </div>

            </div>
        );
    }
}