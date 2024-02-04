import Modal from './components/modal.jsx';
import React, { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='h-screen flex flex-col items-center gap-6'>
      <h1 className='text-5xl text-bold'>Popup Modal</h1>
      <button onClick={()=>setShowModal(true) } className='bg-violet-500 px-4 py-2 rounded-lg text-lg text-white'>Get the eBook</button>
      {showModal && <Modal onClose={()=> setShowModal(false)}></Modal>}
    </div>
  );
}

export default App;
