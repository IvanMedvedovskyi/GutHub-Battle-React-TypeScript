import {Link} from "react-router-dom";
import {FC, ReactElement} from "react";

const Home: FC = (): ReactElement => (
        <main className='home-container'>
            <h1>GitHub Battle: Battle your friends and ... stuff</h1>
            <Link to='battle' className='button'>Battle</Link>
        </main>
    );


export default Home;