import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import pricingData from './data'


const Pricing = () => {
  return (
    <section id='pricing' className='block pricing-block' >
        <Container fluid>
            <div className="title-holder">
                <h2>Pricing &amp; plans</h2>
                <div className="subtitle">check our pricing &amp;  plans</div>
            </div>
            <Row>
                {
                    pricingData.map(price => {
                        return (
                            <Col sm={4} key={price.id}>
                                <div className="heading">
                                    <h3>{price.plan}</h3>
                                    <span className="price">{price.price}</span>
                                </div>
                                <div className='content'>
                                    <ListGroup>
                                        {
                                            price.features.map( (feature, index) => {
                                                return (
                                                    <ListGroup.Item key={price.id + "_" +index}>{feature}</ListGroup.Item>
                                                )
                                            })
                                        }
                                        
                                    </ListGroup>
                                </div>
                                <div className="btn-holder">
                                    <a href={price.link} className="btn btn-primary" target='_blank' rel="noreferrer">Order Now</a>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    </section>
  )
}

export default Pricing