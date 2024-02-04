import React, { useRef } from 'react';
import { X, Download, Target } from 'lucide-react';



const modal = ({onClose}) => {
   
    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className='mt-10 flex flex-col gap-5 text-white'>
                <button onClick={onClose} className='place-self-end'> <X size={30} /> </button>
                <div className='bg-indigo-600 rounded-xl px-20 py-10 flex-col gap-5 items-center mx-4'>
                    <h1 className='text-3xl font-extrabold'>Download the eBook</h1>
                    <p className='text-xl font-bold max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto libero accusantium ipsa doloremque? Harum cumque alias expedita quam omnis!</p>
                    <form>
                        <input type="email"
                            placeholder="enter your email"
                            required
                            className='w-full px-4 text-black border-gray-300 rounded-md' />
                    </form>
                    <button className='mt-4 flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-black font-medium'><Download></Download>Download the eBook</button>
                </div>
            </div>

        </div>
    );
};

export default modal;