import React,{useState} from 'react';
import {Form,Col,Row,Card, Table,InputGroup,Button} from 'react-bootstrap';
 
function MusicTable(props){
  const [searchText, setSearchText] = useState("");



  const onChangSearch =(e)=>{
    const searchTitle = e.target.value
    setSearchText(searchTitle)
    console.log(searchText)
  }

     return(
      <Form>
        <Row  className="show-grid">
        <Col md={4}>
          <Form.Group>
            <InputGroup className="mb-3">
              <Form.Control placeholder="Search item name"  
              aria-describedby="basic-addon2"
              name ="searchText"
              type="text"
              value={searchText}
              onChange={onChangSearch}
              />
              <Button variant="info" id="button-addon2">Clean</Button>
          </InputGroup>
          </Form.Group>
        </Col>
        <Col md={3}>

        </Col>
        <Col md={5}>
        <Form.Group>
            <InputGroup className="mb-3">
            <Button variant="success" id="button-addon2" className="select_r">Add Item</Button>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
        
        <Row >
          <Card className="card_width justify-content-end">
          <Card.Header>Danh Sách Âm Nhạc</Card.Header>
          <Card.Body>
          <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tên Bài Hát </th>
                  <th>Thể Hiện</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  {props.musices.length >0 ?(
                    props.musices.map((item,i)=>{
                        return(
                        <tr key ={item.id} >
                        <td>{item.id}</td>
                        <td>{item.musicName}</td>
                        <td>{item.singer}</td>
                        <td>
                          <Button variant="warning"className="margin_item">Edit</Button>
                          <Button variant="danger">delete</Button>
                          </td>
                        </tr>
                        )
                      })
                  ):(
                      <tr>
                          <td colSpan={4}>No music found</td>
                      </tr>
                  )
              }
                
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        </Row >
      </Form>
     )
 }

 export default MusicTable