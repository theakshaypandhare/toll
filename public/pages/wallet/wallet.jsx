import React from 'react';
import './wallet.css';
import dollericon from "../../assets/dollercoin_.png"
export default function Wallet() {
    return (

        <main>
            <div className='head br'></div>
            <div className='grey-container min-h-60px move-bottom'>
                <div className='innerwhitediv min-h-40px  ' >

                    <div className='d-grid justify-content-center pt-lg-3'>
                        <h5 className='fw-bold text-secondary'>
                            Total tokens
                        </h5 >
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={dollericon} className='m-1' alt="" />

                            <div className='d-flex align-items-center'></div>
                            <h5>
                                5
                            </h5>
                        </div>
                        <button className='btn btn-info m-1 text-light'>Add token </button>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button className='btn border-0  btn-outline-dark'>View history </button>
                    </div>
                </div>
            </div>
        </main>
    )
}