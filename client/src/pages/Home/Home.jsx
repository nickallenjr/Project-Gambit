import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';


const Home = () => 
                <div id='home'>
                        <Navigation links={['Register', 'Login']} />
                        <div id='welcomeBox'>
                                <h1>Pick your comp hero before the game starts!</h1>
                                <hr />
                                <div id='characterPic'></div>
                                <Link to='/register'>Create my Account and get started</Link>
                        </div>
                </div>
        
export default Home;