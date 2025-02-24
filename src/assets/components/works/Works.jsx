import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';
import worksData from './data'


let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const Works = () => {
  return (
    <section id='works' className='block works-block'>
         <Container fluid>
            <div className="title-holder">
                <h2>Our works</h2>
                <div className="subtitle">our awasome works</div>
            </div>
            <Row className='portfoliolist'>
                {
                    worksData.map(work => {
                        return (
                            <Col sm={4} key={work.id}>
                                <div className="portfolio-wrapper">
                                    <a href={work.link} target='_blank' rel="noreferrer" >
                                    <Image src={work.image}/>
                                        <div className="label text-center">
                                            <h3>{work.title}</h3>
                                            <p>{work.subtitle}</p>
                                        </div>
                                    </a>
                                </div>
                            </Col>
                        )
                    })
                }

            </Row>
            <Pagination>{items}</Pagination>
        </Container>
    </section>
  )
}

export default Works