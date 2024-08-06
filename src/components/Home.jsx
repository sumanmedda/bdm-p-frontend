import {Link } from "react-router-dom";

function Home(){
    return <>
        <h1>Backdrop Media</h1>
        <ul className="list-group-custom">
            <li className="list-item-custom">
                <Link to="/clients" className="btn btn-primary btn-lg custom-home-btn">
                    CLIENTS
                </Link>
            </li>
            <li className="list-item-custom">
                <Link to="/add-clients" className="btn btn-primary btn-lg custom-home-btn">
                    ADD CLIENTS
                </Link>
            </li>
            <li className="list-item-custom">
                <Link to="/send-mails" className="btn btn-primary btn-lg custom-home-btn">
                    Send-Mails
                </Link>
            </li>
        </ul>
        
        
        
    </>
}

export default Home