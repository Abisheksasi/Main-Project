import './Component.css';
import { GoVerified } from "react-icons/go";
import { PiMoneyThin } from "react-icons/pi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
function Hero() {
    return (
        <div>
            <div className='text-center heropage'>
                <h1>Home away from home!</h1>
                <h6 className='mt-1'>Book student accommodations near top universities and cities across the globe.</h6>
                <div className="container">
                    <div className="row justify-content-center g-0">
                        <div className="col-auto d-flex justify-content-center mb-2 mb-sm-0">
                            <div className="detail rounded-pill d-flex align-items-center mt-1">
                                <GoVerified className="mt-2 mb-2 ms-3 detail-icon-verify" />
                                <span className='mt-2 mb-2 ms-2 me-3'>Verified Properties</span>
                            </div>
                        </div>
                        <div className="col-auto d-flex justify-content-center mb-2 mb-sm-0 ms-3">
                            <div className="detail rounded-pill d-flex align-items-center mt-1">
                                <FontAwesomeIcon icon={faHeadset} className="mt-2 mb-2 ms-3 detail-icon-head" />
                                <span className='mt-2 mb-2 ms-2 me-3'>24x7 Assistance</span>
                            </div>
                        </div>
                        <div className="col-auto d-flex justify-content-center ms-3 mt-1">
                            <div className="detail rounded-pill d-flex align-items-center">
                                <PiMoneyThin className="mt-2 mb-2 ms-3 detail-icon-money" />
                                <span className='mt-2 mb-2 ms-2 me-3'>Price Match Guarantee</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;