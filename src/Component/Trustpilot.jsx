import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Star from '../image/starTrustpilot.svg';
import Simon from '../image/simon.avif';
import Robert from '../image/Robert.avif';
import Pavneech from '../image/pavneech.avif';
import Ashwini from '../image/Ashwini.png';
import Rat from '../image/rating.svg';

function Trustpilot() {
    const Trustp = useRef(null);
    const [showPrevButton, setShowPrevButton] = useState(false);
    const [showNextButton, setShowNextButton] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (Trustp.current) {
                const { scrollLeft, scrollWidth, clientWidth } = Trustp.current;
                setShowPrevButton(scrollLeft > 0);
                setShowNextButton(scrollLeft < scrollWidth - clientWidth);
            }
        };

        if (Trustp.current) {
            Trustp.current.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (Trustp.current) {
                Trustp.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const handleNext = () => {
        if (Trustp.current) {
            Trustp.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
        }
    };

    const handlePrev = () => {
        if (Trustp.current) {
            Trustp.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
        }
    };

    return (
        <div className="Trustpilot mt-5">
            <h1 className="Heading">What do students have to say about us?</h1>
            <p className="Paragraph">Over 1M students trust amber for their student housing needs ;)</p>
            <button className='trustpilot text-start rounded-pill border border-black-50 d-flex flex-row'>
                <img src={Star} alt="Star" className='ms-3 ' />
                <h6 className='ms-2'>Trustpilot</h6>
                <h6 className='review ms-2 rounded-pill ps-2 pe-2 me-2'>4.8/5</h6>
            </button>
            <div className="position-relative ms-3 me-3">
                <div className="Referral-container" ref={Trustp}>
                    <ul className="Referral list-unstyled d-flex gap-3 Trustpilot-container">
                        <li className='rounded text-start Trustpilot-container border border-black-50'>
                            <div className='Simon d-flex flex-row'>
                                <img src={Simon} alt="Simon" className='ms-3 mt-3 rounded-circle' />
                                <h1 className='ms-4 mt-4'>Simon Langer <h6>Plymouth College of Art</h6></h1>
                                <img src={Rat} alt="Rating" className='ms-5 me-1 Rating-img' /> <br />
                            </div>
                            <h5 className='text-secondary text-start ms-4 me-4 mt-2 mb-4'>Experience was amazing!! I’m going to Plymouth College of <br /> Art. Great prices & the rent durations are negotiable. Also as <br /> an art student I do appreciate the website design — its clear, <br /> visible & well placed.</h5>
                        </li>
                        <li className='rounded text-start Trustpilot-container border border-black-50'>
                            <div className='Simon d-flex flex-row'>
                                <img src={Robert} alt="Simon" className='ms-3 mt-3 rounded-circle' />
                                <h1 className='ms-4 mt-4'>Roberto Antonia <h6>University College London</h6></h1>
                                <img src={Rat} alt="Rating" className='ms-5 me-1 Rating-img' /> <br />
                            </div>
                            <h5 className='text-secondary text-start ms-4 me-4 mt-2 mb-4'>Experience was amazing!! I’m going to Plymouth College of <br /> Art. Great prices & the rent durations are negotiable. Also as <br /> an art student I do appreciate the website design — its clear, <br /> visible & well placed.</h5>
                        </li>
                        <li className='rounded text-start Trustpilot-container border border-black-50'>
                            <div className='Simon d-flex flex-row'>
                                <img src={Ashwini} alt="Simon" className='ms-3 mt-3 rounded-circle' />
                                <h1 className='ms-4 mt-4'>Ashwini K <h6>Plymouth College of Art</h6></h1>
                                <img src={Rat} alt="Rating" className='ms-5 me-1 Rating-img' /> <br />
                            </div>
                            <h5 className='text-secondary text-start ms-4 me-4 mt-2 mb-4'>Experience was amazing!! I’m going to Plymouth College of <br /> Art. Great prices & the rent durations are negotiable. Also as <br /> an art student I do appreciate the website design — its clear, <br /> visible & well placed.</h5>
                        </li>
                        <li className='rounded text-start Trustpilot-container border border-black-50'>
                            <div className='Simon d-flex flex-row'>
                                <img src={Pavneech} alt="Pavneech" className='ms-3 mt-3 rounded-circle' />
                                <h1 className='ms-4 mt-4'>Paveneech Stritagul <h6>Lancaster University</h6></h1>
                                <img src={Rat} alt="Rating" className='ms-5 me-1 Rating-img' /> <br />
                            </div>
                            <h5 className='text-secondary text-start ms-4 me-4 mt-2 mb-4'>Experience was amazing!! I’m going to Plymouth College of <br /> Art. Great prices & the rent durations are negotiable. Also as <br /> an art student I do appreciate the website design — its clear, <br /> visible & well placed.</h5>
                        </li>
                    </ul>
                </div>
                {showPrevButton && (
                    <button className="btn position-absolute top-50 start-0 translate-middle-y border-0 bg-light pervious" onClick={handlePrev}>
                        <FaChevronLeft />
                    </button>
                )}
                {showNextButton && (
                    <button className="btn position-absolute top-50 end-0 translate-middle-y border-0 bg-light next" onClick={handleNext}>
                        <FaChevronRight />
                    </button>
                )}
            </div>
        </div>
    );
}

export default Trustpilot;
