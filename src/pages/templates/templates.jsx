import React from 'react';
import './templates.css';
// import {LiaDownloadSolid} from 'react-icons';
// import dollericon from "../../assets/dollercoin_.png";
// import { InputGroup, FormControl } from 'react-bootstrap';
// import { FaSearch } from 'react-icons/fa';
import brain from '../../assets/icons/brain-21 1.png'
export default function Templates() {
    return (
        <main>
            <div className='head br'></div>
            <div className='btns'>
                <button className='btn btn-info m-1 text-light'>Templates</button>
                <button className='btn btn-info m-1 text-light'>Brainstorming</button>
                <button className='btn btn-info m-1 text-light'>Prompts</button>
            </div>
            <div className='container'>

                <div className='itm-3'>
                    <div className=''>

                        <input type="text" class="form-control border border-black border-2 rounded-3 " id="specificSizeInputName" placeholder="Search" />
                    </div>
                    <div className=''>
                        <select class="form-select border border-black border-2 rounded-3" id="specificSizeSelect">
                            <option selected>Filter</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='hr-template'>
                <hr className='' />
            </div>
            <div className='grey-container min-h-60px '>
                <div className='innerwhitediv' >
                    <div className='itm-1 p-2'>
                        <div className=' d-flex justify-content-center  '>
                            <button className='btn btn-info m-1 text-light'>Entrepreneurship</button>
                        </div>
                        <div className=''>
                            <div className=' '>
                                18-03-2023
                            </div>
                        </div>
                    </div>
                    <div className='itm-1 p-2'>
                        <div className='  '>
                        </div>
                        <div className=''>
                            <div className=' '>
                                <p>
                                    Akshay sharma</p>
                            </div>
                        </div>
                    </div>
                    <div className='itm-1 p-2'>
                        <div className=''>
                            <div className=' '>
                                <h6>Traits :</h6>
                            </div>
                            <div className='itm-2 '>
                                <button>abc</button>
                                <button>abc</button>
                                <button>abc</button>
                                <button>abc</button>
                            </div>
                        </div>
                    </div>
                    <div className='itm-1 p-2'>
                        <div className=''>
                            <div className=' '>
                                <h6>Assignment :</h6>
                            </div>
                            <div className='itm-2 '>
                                <button>abc</button>
                                <button>abc</button>
                                <button>abc</button>
                                <button>abc</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='itm-4'>
                <div>
                    <label htmlFor="">
                        <img src={brain} alt='b' />Brains 1.2k</label>
                </div>
                <div>
                    <label htmlFor="">Comments 1k</label>
                </div>
                <div>
                    <label htmlFor="">Download</label>
                </div>
                <div>
                    <label htmlFor="">28.7k</label>
                </div>
            </div>
            <div className='hr-template'>
                <hr className='' />
            </div>
            <div className='grey-container min-h-60px '>
                <div className='innerwhitediv' >
                    <div className='itm-1 p-2'>
                        <div className=' d-flex justify-content-center  '>
                            <button className='btn btn-info m-1 text-light'>Entrepreneurship</button>
                        </div>
                        <div className=''>
                            <div className=' '>
                                18-03-2023
                            </div>
                        </div>
                    </div>
                    <div className='itm-1 p-2'>
                        <div className='  '>
                        </div>
                        <div className=''>
                            <div className=' '>
                                <p>
                                    Akshay sharma</p>
                            </div>
                        </div>
                    </div>
                    <div className='itm-1 p-2'>
                        <div className=''>
                            <div className=' '>
                                <h6>Traits :</h6>
                            </div>
                            <div className='itm-2 '>
                                <button>abc</button>
                                <button>abc</button>
                                <button>abc</button>
                                <button>abc</button>
                            </div>
                        </div>
                    </div>
                    <div className='itm-1 p-2'>
                        <div className=''>
                            <div className=' '>
                                <h6>Assignment :</h6>
                            </div>
                            <div className='itm-2 '>
                                <button>abc</button>
                                <button>abc</button>
                                <button>abc</button>
                                <button>abc</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}