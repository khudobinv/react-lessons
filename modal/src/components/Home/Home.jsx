import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const Home = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <div className='flex items-center justify-center'>
            <button
            isOpen={isOpen}
            setOpen={setOpen}
            onClick={() => setOpen(true)}
            className='bg-zinc-800
            rounded-lg px-5 py-3 font-semibold 
            text-white hover:bg-zinc-700
            transition ease-out delay-100'>
                Open modal window
            </button>
            <Modal isopen={isOpen} setOpen={setOpen}></Modal>
        </div>
    );
};

export default Home;