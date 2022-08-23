import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

const Landing = () => {
    return (
        <center className="landing">
            <Link to="/game">
                <button className='startBtn'>sTArT GAMe</button>
            </Link>
            <p className="footer">Copyright © 2022 gamerszone.io</p>
        </center>
    )
}

export default Landing