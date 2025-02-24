import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import servicesData from './data'

const Services = () => {
  return (
    <section id="services" className='block services-block'>
        <Container fluid>
            <div className='title-holder'>
                <h2>Our services</h2>
                <div className="subtitle">
                    services we provide
                </div>
            </div>
        <Row>
            {
                servicesData.map(service => {
                    return (
                        <Col sm={4} className='holder' key={service.id}>
                            <div className="icon">
                                <i className={service.icon}></i>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </Col>
        
                    )
                })
            }
        </Row>
        </Container>
    </section>
  )
}

export default Services