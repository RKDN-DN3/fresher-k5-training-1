import React from 'react';
import {Row, Col,Form,Button, Card} from'react-bootstrap';

function DetailMusic(props){
    return(
        <Row style ={{width:'70%', alignItems: 'center'}}>
        <Card  >
            <Card.Header>
                <h4>Thông tin bài hát</h4>
            </Card.Header >
            <Form style={{marginTop:'5px'}} >
                <Form.Group className="mb-3" controlId="formGridName">
                    <Form.Label>Tên Bài Hát</Form.Label>
                    <Form.Control placeholder="Tên bài hát" />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridSinger">
                    <Form.Label>Ca Sĩ</Form.Label>
                    <Form.Control placeholder="Nhập tên ca sĩ" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridMusician">
                    <Form.Label>Nhạc Sĩ</Form.Label>
                    <Form.Control  placeholder="Nhập tên nhạc sĩ" />
                    </Form.Group>

                </Row>

                <div style={{marginBottom:'5px'}}>
                    <Button variant="secondary" >
                        Back List
                    </Button>
                    <Button variant="danger" type="submit" style={{marginLeft:'5px'}}>
                        Delete Music
                    </Button>
                </div>
            </Form>
        </Card>
        </Row>
    )
}
export default DetailMusic;