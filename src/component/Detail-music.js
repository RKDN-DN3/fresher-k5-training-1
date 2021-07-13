import React,{useState} from 'react';
import {Row, Col,Form,Button, Card} from'react-bootstrap';
import { useHistory } from 'react-router-dom';

function DetailMusic(props){
    const [music, setMusic] = useState(props.musicInit);
    const handleChange = e => {
        const {name, value} = e.target;
        setMusic({...music, [name]: value});
    }
    const history = useHistory()

    function onBackList() {
        history.push("/");
    }
    const deleteClick =()=>{
        const id = music.id
        console.log(id)
        props.deleteMusic(id)
        history.push("/");
        
    }
    return(
        <Row style ={{width:'70%', alignItems: 'center'}}>
        <Card  >
            <Card.Header>
                <h4>Thông tin bài hát</h4>
            </Card.Header >
            <Form style={{marginTop:'5px'}} >
                <Form.Group className="mb-3" controlId="formGridName">
                    <Form.Label>Tên Bài Hát</Form.Label>
                    <Form.Control placeholder="Tên bài hát" value={music.musicName} onChange={handleChange} readOnly/>
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridSinger">
                    <Form.Label>Ca Sĩ</Form.Label>
                    <Form.Control placeholder="Nhập tên ca sĩ"  value={music.singer} onChange={handleChange} readOnly/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridMusician">
                    <Form.Label>Nhạc Sĩ</Form.Label>
                    <Form.Control  placeholder="Nhập tên nhạc sĩ" value={music.musician} onChange={handleChange} readOnly/>
                    </Form.Group>

                </Row>

                <div style={{marginBottom:'5px'}}>
                    <Button variant="secondary" onClick={onBackList} >
                        Back List
                    </Button>
                    <Button variant="danger" onClick={deleteClick} style={{marginLeft:'5px'}}>
                        Delete Music
                    </Button>
                </div>
            </Form>
        </Card>
        </Row>
    )
}
export default DetailMusic;