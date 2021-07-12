import React, { useEffect, useState } from 'react';
import {Row, Col,Form,Button, Card} from'react-bootstrap';

function EditMusic(props){

    const [music, setMusic] = useState(props.musicInit);

    useEffect(()=>{
        setMusic(props.musicInit)
    }, [props])

    const handleChange = e => {
        const {name, value} = e.target;
        setMusic({...music, [name]: value});
    }

    const onUpdate =e =>{
        e.preventDefault();
         props.updateMusic(music.id, music)
         console.log(music)
    }
    return(
        <Row style ={{width:'70%', alignItems: 'center'}}>
            <Card  >
                <Card.Header>
                    <h4>Chỉnh sửa thông tin bài hát</h4>
                </Card.Header >
                <Form style={{marginTop:'5px'}}  onSubmit={onUpdate}>
                    <Form.Group className="mb-3" controlId="formGridName">
                        <Form.Label>Tên Bài Hát</Form.Label>
                        <Form.Control name="musicName"  placeholder="Tên bài hát" type="text"  value={music.musicName} onChange={handleChange} />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridSinger">
                        <Form.Label>Ca Sĩ</Form.Label>
                        <Form.Control name="singer" placeholder="Nhập tên ca sĩ"  value={music.singer} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridMusician">
                        <Form.Label>Nhạc Sĩ</Form.Label>
                        <Form.Control  name="musician" placeholder="Nhập tên nhạc sĩ" value={music.musician} onChange={handleChange} />
                        </Form.Group>

                    </Row>

                    <div style={{marginBottom:'5px'}}>
                        <Button variant="secondary" >
                            Back List
                        </Button>
                        <Button variant="success" type="submit" style={{marginLeft:'5px'}}>
                            Update Music
                        </Button>
                        <Button variant="warning" type="submit" style={{marginLeft:'5px'}}>
                            Cancel
                        </Button>
                    </div>
                </Form>
            </Card>
            </Row>
    )
}
export default EditMusic;