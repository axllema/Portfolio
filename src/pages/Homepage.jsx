// import React from 'react'; 
// import { Link } from "react-router-dom"
import Header from '../components/header';
import Presentation from '../components/presentation';
import Footer from '../components/footer';
// import '../scss/pages/_home.scss'
// import '../scss/style.scss'

function Home() {
    return (
        <div>
            <Header/>
            <div>

                <Presentation />
                
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
