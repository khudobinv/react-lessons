import React from 'react';
import { VscChromeClose } from "react-icons/vsc";

const Modal = ({isOpen, setOpen}) => {
    return (
        <div className='absolute left-0 top-0 w-full h-full flex items-center justify-center bg-white bg-opacity-10'>
            <div className='bg-zinc-800 rounded-2xl p-10 max-w-2xl'>
                <div className='flex flex-row justify-between items-center w-full gap-10'>
                    <h1 className='text-white text-2xl font-semibold'>Modal window</h1>
                    <VscChromeClose isOpen={isOpen} onClick={() => setOpen(false)} className='text-white hover:bg-zinc-700 cursor-pointer text-2xl rounded-lg p-1'/>
                </div>
                <p className='text-white mt-5 italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eos mollitia facilis recusandae ea? Porro quia illo, neque assumenda, perferendis iure dolorem architecto ut repellendus adipisci, nemo praesentium dolores voluptatibus.</p>
                <img className='mt-5 rounded-2xl' src="https://devsdata.com/wp-content/uploads/2023/10/skills-needed-for-software-developer.png" alt="modal-img" />
            </div>
        </div>
    );
};

export default Modal;