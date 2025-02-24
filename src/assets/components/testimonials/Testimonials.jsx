import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import testimonialsData from './data'

const Testimonials = () => {
  return (
    <section id='testimonials' className='block testimonials-block' >
        <Container fluid>
            <div className="title-holder">
                <h2>Clients testimonials</h2>
                <div className="subtitle">what client says about us</div>
            </div>  
            <Carousel controls={false}>
                {
                    testimonialsData.map(testimonial => {
                        return (
                            <Carousel.Item key={testimonial.id}>
                                <blockquote>
                                    <p>{testimonial.description}</p>
                                    <cite>
                                        <span className='name'>{testimonial.name}</span>
                                        <span className='designation'>{testimonial.designation}</span>
                                    </cite>
                                </blockquote>
                            </Carousel.Item>                        
                        )
                    })
                }

    
            </Carousel>      
        </Container>
    </section>
  )
}

export default Testimonials