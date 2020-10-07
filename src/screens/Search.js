import React from 'react';
import { Content, Row, Col, Box, Sidebar, Calender } from 'adminlte-2-react';

import SearchBar from '../components/Searchbar';

const { Searchbar } = Sidebar;

export default function () {
    return (
        <Content title='Search'>
            <Row>
                <Col xs={6}>
                    <br />
                    <Box title='Book Search' >
                        <Searchbar includeButton='true' placeholder='iewojo' />
                    </Box>
                </Col>
            </Row>
            <Row>
                <SearchBar />
            </Row>
            {/* <Row>
                <Calender />
            </Row> */}
        </Content>
    );
}