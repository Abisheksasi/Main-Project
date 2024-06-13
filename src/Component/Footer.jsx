import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import amber from '../image/amberblack.svg';
import Rat from '../image/rating.svg';
function Footer() {
    return (
        <Container className="mt-5 Footer" fluid>
            <Row className="Footer">
                <Col lg={4} className='footer'>
                  <img src={amber} alt="amber" className='amber ms-3'/>
                  <p className='ms-3 mt-1'>amber © 2024 All rights reserved</p>
                  <div className='foot-rat ms-3 rounded  w-100'>
                    <div className='d-flex flex-row'>
                    <img src={Rat} alt="" className='foot-icon mt-3 ms-4'/>
                    <h6 className='ms-3 mt-4'>4.8/5 on Trustpilot</h6>
                    </div>
                    <div className=' ms-4 mt-3 pb-2'>
                        <span className='d-flex flex-row'>Rated as"Excellent"<h6 className='rating'>• 4800+</h6> Reviews by students</span>
                    </div>
                  </div>
                  
                </Col>
                <Col lg={2}>

                </Col>
                <Col lg={2}>

                </Col>
                <Col lg={2}>

                </Col>
                <Col lg={2}>

                </Col>
            </Row>
        </Container>
    )
}
export default Footer;