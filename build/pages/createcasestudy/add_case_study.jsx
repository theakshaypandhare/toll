import React, { useEffect, useRef } from "react";
import "./add_case_study.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
export default function AddCaseStudy() {
    const scrollableRef = useRef(null);

    useEffect(() => {
        const scrollableElement = scrollableRef.current;
        scrollableElement.scrollLeft = scrollableElement.scrollWidth;
    }, []);

    return (
        <main>
            <div className="container">
                <div className="head br"></div>
            </div>
            <div className="container">
                <div class="">
                    <div class=" itm-1 " role="group" aria-label="First group">
                        <div className="d-flex justify-content-center" >
                            <label htmlFor=""> Add a frame</label>
                        </div>
                        <div class="scroll gap-3" ref={scrollableRef}>
                            <button type="button" class="btn btn-info rounded rounded-5 text-light m-1">1</button>
                            <button type="button" class="btn btn-info rounded rounded-5 text-light m-1">2</button>
                            <button type="button" class="btn btn-info rounded rounded-5 text-light m-1">3</button>
                            <button type="button" class="btn btn-info rounded rounded-5 text-light m-1">4</button>
                            <button type="button" class="btn btn-info rounded rounded-5 text-light m-1">4</button>
                            <button type="button" class="btn btn-info rounded rounded-5 text-light m-1">4</button>
                            <button type="button" class="btn btn-info rounded rounded-5 text-light m-1">4</button>
                            <button type="button" class="btn btn-secondary rounded rounded-5 text-light mx-1">+</button>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="itm-23">
                        <div className="innerwhitediv">
                            <button type="button" class="btn btn-info btn-group-sm rounded rounded-5 text-light m-1">1</button>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-end gap-2 m-3">
                    <button className="btn btn-info rounded-5 text-light btn-sm">
                        <ArrowBackIos />
                    </button>
                    <button className="btn btn-secondary rounded-5 text-light btn-sm">
                        <ArrowForwardIos />
                    </button>
                </div>
                <div className="d-grid d-flex justify-content-center">
                    <div className="wdth">
                        <div className=''>
                            <select class="form-select rounded-3 txt-ip" id="specificSizeSelect">
                                <option selected>Choose skills</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className=''>
                            <select class="form-select rounded-3 txt-ip" id="specificSizeSelect">
                                <option selected>Choose traits</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>


                        <div className='itm-3'>
                            <button>aaaaaaaaaaaaaabc</button>
                            <button>aaaaaaaaabc</button>
                            <button>abcaaaaa</button>
                            <button>aaaaaaaaabc</button>
                            <button>abcaaaaa</button>
                            <button>aaaaaaaaabc</button>
                            <button>abcaaaaa</button>
                        </div>
                        <div className=''>
                            <input type="text" class="form-control txt-ip rounded-3 " id="specificSizeInputName" placeholder="Add heading *" />
                        </div>
                        <div className=''>
                            <input type="text" class="form-control txt-ip rounded-3 " id="specificSizeInputName" placeholder="Add content *" />
                        </div>
                        <div className=' d-flex justify-content-center'>
                            <button className="text-light t-btn">Save</button>
                        </div>
                        <div className=' d-flex justify-content-center'>
                            <button className="t-btn-no-bg">Add Assignment</button>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </main>
    )
}