

import logo from '../../../assets/logo/logo3.jpg';

const Header = () => {
    return (
        <div className="container mx-auto bg-slate-300 mt-3">
            {/* <h2 className='underline'>This is header</h2> */}
            <div className="flex justify-between  h-14 px-3 py-1">
                <div className='h-12'>
                    <img className='h-12 w-12' src={logo} />
                </div>
                <div className='flex justify-center'>
                    <input className='border-none rounded-md bg-indigo-100 font-semibold ' type="text" />
                    <button className='ms-4'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;