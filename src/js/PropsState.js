import React from 'react';

class Codelab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            state_hello: 'hello react!',
            count: 0,
        };

    }


    changeState = () => {
        this.setState({
            state_hello: 'state_hello changed!!!!',
            count: this.state.count + 1,
        });
    };

    render() {
        return (
            <div>
                {this.state.state_hello} <br />
                {this.state.count} <br />
                {this.props.codelabMessage} <br />
                this.props.children : {this.props.children}

                <div>
                    <button onClick={this.changeState}>click</button>
                </div>
            </div>
        );
    }

}

export class PropsState extends React.Component {
    render() {
        return (
            <Codelab codelabMessage={this.props.indexMessage}> 이게 Children 이다</Codelab>
            // <Codelab name={this.props.name}>{this.props.children}</Codelab>
        );
    }
}
