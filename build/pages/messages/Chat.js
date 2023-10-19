import React from 'react';
import './Chat.css';



export default function Chat() {
    return (
    <div className='container pt-5'>
        <div className='row k1 '>
            <div className='col-12 d-flex gap-3'>
            <i class="fas fa-chevron-circle-left  pt-4 text-center fs"></i>
            <div className='pt-4 '>
            <img alt='empty' 
        style={{width:50, height: 50, borderRadius: 400/ 2}}/></div>
        <p className='pt-4'>Khurana K</p>
            </div>
           < div className='ms-5 pp'>Kanya Khurana</div>
        </div>
        <div className=''>
        <p className='text-center pt-2'>Today,8.30pm</p>
        <div className='rounded-pill E7'>
        <p className='ms-3 '>Hey There!</p>
        <p className='ms-5'>8.30</p>
        </div>
        <div className='rounded-pill E7'>
        <p className='ms-3'>How are you?</p>
        <p className='ms-5'>8.30</p>
        </div>
            <div className='rounded-pill E8 ms-5'>
            <p className=' ms-4' >Hello!</p>
            <p className='ms-4'>8.30</p>
            </div>
            <div className='rounded-pill E8 ms-5'>
            <p className='ms-4'>I am fine and how are you?</p>
            <p className='ms-4'>8.30</p>
            </div>
        </div>
        <div className='d-flex pt-5 p-1'>
        <div className='d-flex gap-2 rounded-pill E7 p-1'>
        <i class="fas fa-paperclip pt-1"></i>
        <p>Type your message here...</p>
        <i class="fas fa-camera pt-1"></i>
        </div>
        <i class="fas fa-paper-plane py-2 fs-3"></i>
        </div>
    
    </div>
        )
    }