import React from 'react';

const Layout = ({children}) => {
    return (
        <div className='h-screen bg-zinc-900 flex justify-center'>
            {children}
        </div>
    );
};

export default Layout;