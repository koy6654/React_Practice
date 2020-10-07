import React from 'react';
import { Content, Row, Col, Box, ProgressGroup } from 'adminlte-2-react';

import RentalPie from '../components/Pie';
import RentalChart from '../components/Chart';

export default function Home() {
    return (
        <Content title="HOME">
            <Row>

                <Col xs={12}>
                    <Box>
                        <RentalChart />
                    </Box>
                </Col>
            </Row>
            <Row>
                <Col xs={7}>
                    <Box>
                        <RentalPie />
                    </Box>
                </Col>
                <Col xs={5}>
                    <Box>
                        <ProgressGroup text='Users number' currentValue='10' maxValue='10' color='red' />
                        <ProgressGroup text='Whole books' currentValue='30' maxValue='30' color='aqua' />
                        <ProgressGroup text='Borrowed books' currentValue='20' maxValue='30' color='yellow' />
                        <ProgressGroup text='Remain books' currentValue='10' maxValue='20' color='green' />
                    </Box>
                </Col>
            </Row>

        </Content>
    );
}