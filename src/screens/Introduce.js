import React from 'react';
import { Content, Row, Col, Box } from 'adminlte-2-react';

export default function Introduce() {
    return (
        <Content title='Introduce'>
            <Row>
                <Col>
                    <Box title='EMS Project' footer='Support by VIVANS' textCenter='true' titleRight='true'>
                        <div>
                            <div style={{ fontSize: 30 }}>2조</div><br />
                            <div>
                                FrontEnd
                            </div>
                            <div style={{ fontSize: 20 }}>
                                권오영
                            </div>

                            <br />
                            <div>
                                <div>
                                    BackEnd
                                </div>
                                <div style={{ fontSize: 20 }}>
                                    배종현 최창현
                                </div>
                            </div>

                            <br />
                            <div>
                                Sensor & Server
                            </div>
                            <div style={{ fontSize: 20 }}>
                                최연웅
                            </div><br /><br />
                        </div>
                    </Box>
                </Col>
            </Row>
        </Content >
    );
}