import { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [input, setInput] = useState("");    
    const [opacity, setOpacity] = useState("");
    const navigate = useNavigate();

    const handleEnterSubmit = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') navigate(`/${input}`);
    };

    const handleClickSubmit = (e: React.MouseEvent) => {
        if (e.type === 'click') navigate(`/${input}`);
    };
    
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setOpacity("blur");
        } else {
            setOpacity("");          
        }
    };
    
    const handleHeaderClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Cleanup
    }, []);

    return (
        <header className={` ${opacity}`} onClick={handleHeaderClick}>
            <div className='header-content'>
                <a className='home' href='/'>
                    <img
                        src='/cam-icon.svg'
                        className='img-icon'
                        alt='Logo' 
                    />   
                    <h1 className=''>Image API</h1>
                </a>
                <Container className='search-holder'>
                    <input
                        id="input"
                        type='text'
                        onKeyDown={handleEnterSubmit}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button className='search-btn' onClick={handleClickSubmit}>
                        Search
                    </Button>
                </Container>
            </div>
        </header>
    );
}

export default Header;