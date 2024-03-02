

import Header from './common/Header';
import Footer from './common/Footer';
import Main from './common/Main';
// import { Outlet } from 'react-router-dom';

const TheLayout = () => {
    return (
        <div className=''>
            <div>
                <Header />
            </div>

            {/* main rander App > app rander TheLayout > Home */}
            <main>
                {/* <Outlet></Outlet> */}
                <Main></Main>
            </main>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default TheLayout;