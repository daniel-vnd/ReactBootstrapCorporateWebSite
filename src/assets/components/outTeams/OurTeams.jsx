import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import teamsData from './data'



const OurTeams = () => {
  return (
    <section id='teams' className='block teams-block' >
        <Container fluid>
            <div className="title-holder">
                <h2>Our teams</h2>
                <div className="subtitle">some of our experts</div>
            </div>
        <Row>
            {
                teamsData.map(team => {
                    return (
                        <Col sm={3} key={team.id}>
                            <div className="image">
                                <Image src={team.image} fluid alt={team.name}/>;
                                <div className="overlay">
                                    <div className="socials">
                                        <ul>
                                            <li><a href={team.fbLink} target="_blank" rel="noreferrer"><i className='fab fa-facebook-f'></i></a></li>
                                            <li><a href={team.tweeterLink} target='_blank' rel="noreferrer"><i className='fab fa-twitter'></i></a></li>
                                            <li><a href={team.linkedinLink} target="_blank" rel="noreferrer"><i className='fab fa-linkedin-in'></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <h3>{team.name}</h3>
                                <span className="designation">{team.designation}</span>
                                <p>{team.description}</p>
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

export default OurTeams