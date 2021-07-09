import logo from './logo.svg';
import './App.css';
import {Row, Col,InputGroup,Form,Button, Card,Table} from'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className="container"> 
        <h2>Project 01 - React CRUD</h2>
        <hr/>
        <Form>
          <Row  className="show-grid">
            <Col md={4}>
              <Form.Group>
                <InputGroup className="mb-3">
                  <Form.Control placeholder="Search item name" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                  <Button variant="info" id="button-addon2">Clean</Button>
              </InputGroup>
              </Form.Group>
            </Col>
            <Col md={3}>
            <Form.Group>
                <InputGroup className="mb-3">
                  <select class="form-select form-select-sm select_r" aria-label=".form-select-sm example">
                    <option selected>Sort by</option>
                    <option value="1">Tăng dần</option>
                    <option value="2">Giảm Dần</option>
                  </select>
                  <Button variant="primary" id="button-addon2">Sort</Button>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={5}>
            <Form.Group>
                <InputGroup className="mb-3">
                <Form.Control placeholder="Item name" aria-label="Recipient's username" aria-describedby="basic-addon2" className="select_r" />
                <Button variant="success" id="button-addon2" className="select_r">Add Item</Button>
                <Button variant="outline-secondary" id="button-addon2">Cancel</Button>
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
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark Tên Bài HátTên Bài HátTên Bài HátTên Bài HátTên Bài HátTên Bài HátTên Bài HátTên Bài Hát</td>
                        
                        <td>
                          <Button variant="warning"className="margin_item">Edit</Button>
                          <Button variant="danger">delete</Button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                    
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                     
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
          </Row>
        </Form>
        
      </div>
    </div>
  );
}

export default App;
