import React,{useState} from 'react';
import {Row, Col,Form,Button, Card} from'react-bootstrap';
import { useHistory } from 'react-router-dom';


    function AddMusic(props){
        const initialFormState = { id: null, musicName:"",singer:"", musician:""};
        const [music, setMusic]= useState(initialFormState);
        const [submitted, setSubmited] =useState(false);
        const history = useHistory()

        const handleInput = (event)=>{
            /* const name = event.targe?.name
            setMusicName(event.target.value);
            switch (name) {
                case "musicName":
                    
                    break;
                default:
                    break;
            }; */

            const { name, value } = event.target
 
            setMusic({ ...music, [name]: value })
            
        }
        const onSubmit = (event) => {
            event.preventDefault()
            if (!music.musicName) return
            
            props.addMusic(music)
            setMusic(initialFormState)
            setSubmited(true)
            if(submitted==true){
                alert("Thêm thanh công ")
            }
           
        }
        function onBackList() {
            history.push("/");
        }
        return(
            <Row style ={{width:'70%', alignItems: 'center'}}>
            <Card  >
                <Card.Header>
                    <h4>Thêm bài hát mới</h4>
                </Card.Header >
                <Form style={{marginTop:'5px'}}  onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="formGridName">
                        <Form.Label>Tên Bài Hát</Form.Label>
                        <Form.Control name="musicName"  placeholder="Tên bài hát" type="text"  value={music.musicName} onChange={handleInput} />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridSinger">
                        <Form.Label>Ca Sĩ</Form.Label>
                        <Form.Control name="singer" placeholder="Nhập tên ca sĩ"  value={music.singer} onChange={handleInput} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridMusician">
                        <Form.Label>Nhạc Sĩ</Form.Label>
                        <Form.Control  name="musician" placeholder="Nhập tên nhạc sĩ" value={music.musician} onChange={handleInput} />
                        </Form.Group>

                    </Row>

                    <div style={{marginBottom:'5px'}}>
                        <Button variant="secondary" onClick={onBackList}>
                            Back List
                        </Button>
                        <Button variant="success" type="submit" style={{marginLeft:'5px'}} >
                            ADD Music
                        </Button>   
                    </div>
                </Form>
            </Card>
            </Row>
        )
    }
    export default AddMusic;