import React, { Component } from 'react';
import { Content, Row, Col, Box } from 'adminlte-2-react';

export default class FetchTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }

    componentWillMount() {
        fetch('http://localhost:5000/fetchtest')
            .then(
                res =>
                    res.json()
            )
            .then(
                data => {
                    console.log(data)
                    this.setState({
                        posts: data
                    })
                    console.log(this.state)
                }
            );
    }

    render() {
        const { posts } = this.state;
        console.log(posts)
        const postsList = posts.map((post) => (
            <div key={post.id}>
                <h4>{post.title}</h4>
                <h4>{post.body}</h4>
            </div>
        ))
        return (
            <Content title='FetchTest'>
                <Row>
                    <Col>
                        <Box>
                            {postsList}
                        </Box>
                    </Col>
                </Row>
            </Content>
        );
    }

}