import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

const Footer = () => {
    const [showTopBtn, setShowTopButton] = useState(false);

    useEffect(() => {
         window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopButton(true);
            } else {
                setShowTopButton(false);
            }
         })
    }, []);


    const goTop = () => {
        window.scrollTo({
            top: 0,
            behaviour: 'smooth'
        })
    }

  return (
    <Container fluid>
        <div className="copyright">&copy; 2022 Corporate. All right reserved.</div>
        <div className="socials">
            <ul>
                <li><a href="https://www.facebook.com" target='_blank' rel="noreferrer"><i className='fab fa-facebook-f'></i></a></li>
                <li><a href="https://www.twitter.com" target='_blank' rel="noreferrer"><i className='fab fa-twitter'></i></a></li>
                <li><a href="https://www.linkedin.com" target='_blank' rel="noreferrer"><i className='fab fa-linkedin-in'></i></a></li>
                
            </ul>
        </div>
        {
            showTopBtn && (<div className='go-top' onClick={goTop}></div>)
        }
    </Container>
  )
}

export default Footer