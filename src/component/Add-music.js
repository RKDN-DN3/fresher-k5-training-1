    import React from 'react';
    import {Row, Col,Form,Button, Card} from'react-bootstrap';
    import './Add-music.css';

    function AddMusic(){
        return(
            console.log("abc"),
            <Row style ={{width:'70%', alignItems: 'center'}}>
            <Card  >
                <Card.Header>
                    <h4>Thêm bài hát mới</h4>
                </Card.Header >
                <Form >
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>
                </Form>
            </Card>
            </Row>
        )
    }
    export default AddMusic;