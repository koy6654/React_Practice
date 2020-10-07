import React from 'react';
import { render } from '@testing-library/react';

export class Mapping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [
                { name: 'a', phone: '010-0000-0000' },
                { name: 'b', phone: '010-1000-0000' },
                { name: 'c', phone: '010-2000-0000' },
                { name: 'd', phone: '010-3000-0000' },
            ]
        };
    }


    render() {
        const mapToComponent = (data) => {
            return data.map((dataArray) => {
                const newDataArray = {};
                return (<MappingOutput name={newDataArray[dataArray.name]} phone={dataArray.phone} />);
            })
        };

        return (
            <div>
                {mapToComponent(this.state.userData)}
            </div>
        );
    }
}

export class MappingOutput extends React.Component {
    render() {
        return (
            <div>
                {this.props.name}{this.props.phone}
            </div>
        );
    }
}