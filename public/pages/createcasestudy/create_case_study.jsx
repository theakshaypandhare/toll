import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import './create_case_study.css';
import book from "../../assets/icons/1.png"
import search from "../../assets/icons/2.png"
import page from "../../assets/icons/3.png"

export default function CreateCaseStudy() {
    const [open, setOpen] = useState(false);
    return (
        <main>
            <div className='head br'></div>
            <div>
            <h6 className='text-secondary m-3'>
            Steps need to follow to create case study
                        </h6>
            </div>
            <div className='grey-container min-h-60px move-bottom'>
                <div className=' row px-1 px-lg-20'>
                    <div className='col innerwhitediv min-h-40px m-1 m-lg-1 d-grid justify-content-center' >

                        <img src={book} className='m-1' alt="" />
                        <h6>
                            Manual
                        </h6>

                    </div>
                    <div className='col innerwhitediv min-h-40px  m-1 m-lg-1 d-grid justify-content-center' >
                        <img src={search} className='m-1' alt="" />
                        <h6>
                            Templates
                        </h6>
                    </div>
                    <div className='col innerwhitediv min-h-40px  m-1 m-lg-1 d-grid justify-content-center' >
                        <img src={page} className='m-1' alt="" />
                        <h6 className='text-center'>
                            Create<br />case -study
                        </h6>
                    </div>
                </div>

            </div>
            <div className='d-flex justify-content-center'>
            <h5 className='fw-bold text-secondary pt-3'>
            FAQ,s
                        </h5 >
            </div>
            <div className='grey-container min-h-60px move-bottom'>
            <div className='innerwhitediv'>
                <div className='m-lg-3'>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        className='bg-transparent border-0 text-dark'
                    >
                        {open ? <span>-</span> : <span>+</span>}  click
                    </Button>
                    <Collapse in={open}>
                        <div id="example-collapse-text" >
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </Collapse>
                </div>
                </div> <div className='innerwhitediv'>
                <div className='m-lg-3'>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        className='bg-transparent border-0 text-dark'
                    >
                        {open ? <span>-</span> : <span>+</span>}  click
                    </Button>
                    <Collapse in={open}>
                        <div id="example-collapse-text" >
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </Collapse>
                </div>
                </div> <div className='innerwhitediv'>
                <div className='m-lg-3'>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        className='bg-transparent border-0 text-dark'
                    >
                        {open ? <span>-</span> : <span>+</span>}  click
                    </Button>
                    <Collapse in={open}>
                        <div id="example-collapse-text" >
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </Collapse>
                </div>
                </div> <div className='innerwhitediv'>
                <div className='m-lg-3'>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        className='bg-transparent border-0 text-dark'
                    >
                        {open ? <span>-</span> : <span>+</span>}  click
                    </Button>
                    <Collapse in={open}>
                        <div id="example-collapse-text" >
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </Collapse>
                </div>
                </div>
            </div>
        </main>
    )
}