import React from 'react';
import '../channel/create-channel.css'
import 'bootstrap/dist/js/bootstrap.bundle.js';
import styles from './IPhone14Pro12.module.css'
import cover from './image-4@2x.png';
import coverbg from './coverbg.png';
import avtar from './dp.png';
import rectangle from './Rectangle1146.svg';
import group1 from './group.svg';
import group2 from './group1.svg';
import group3 from './group2.svg';
import group4 from './group3.svg';
import group5 from './group4.svg';
import barndp from './Rectangle6.svg';
// import {
//     ColorTwoTone
// } from '@mui/icons-material'
// import { height } from '@mui/system';
export default function Createchannel() {
    return (
        <main>
            <section>



                <div className="createmychannelpage">
                    <div className='container  mb-5'>

                        <div className='row a  d-flex justify-content-center'>
                            <img className={styles.coverimage} alt="" src={cover} />
                            <img className={styles.coverbg} alt="" src={coverbg} />


                            <div className='row-cols-auto   align-content-center d-flex rowoverlay'>
                                <div className='col-4   col-sm-4 col-xl-3 '>
                                    <div className='row   '>
                                        <div className='col-3   col-sm-3 col-xl-2  '>
                                            fineeee
                                        </div>
                                        <div className='col-9   col-sm-9 col-xl-10 '>
                                            <div className='row   align-content-center d-flex'>
                                                <img
                                                    className={styles.component1Child}
                                                    alt=""
                                                    src={avtar}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-8   col-sm-8 col-xl-9 '>
                                    <div className='row top-50'>
                                        <div className='Create-A-New-Channel'>
                                            Create A New Channel
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container px-xl-4 px-md-4 h-100'>
                            <div className='row '>
                                <div className='lablename'>
                                    <label>
                                        NEW CHANNEL NAME
                                    </label>
                                </div>
                                <div>
                                    <input className='form-control textinput' type='text'></input>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='lablename'>
                                    <label>
                                        CHOOSE CHANNEL TYPE
                                    </label>
                                </div>

                                <div class="form-group ">
                                    <select class="form-control textinput" id="exampleFormControlSelect1">
                                        <option selected>Choose..</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='lablename'>
                                    <label>
                                        CHOOSE THE SUBJECTS
                                    </label>
                                </div>
                                <div>
                                    <select className='form-control textinput' name="skills" id="cars">
                                        <option selected>Choose..</option>
                                        <option value="JAVA">Volvo</option>
                                        <option value="HTML">Saab</option>
                                        <option value="CSS">Opel</option>
                                        <option value="PHP">Audi</option>
                                    </select>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='lablename'>
                                    <label>
                                        CHOOSE THE SKILLS
                                    </label>
                                </div>
                                <div className='input-group '>
                                    <input className='form-control textinput' type='text'></input>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='lablename'>
                                    <label>
                                        CHOOSE THE SKILLS
                                    </label>
                                </div>
                                <div>
                                    <div className='mt-2 '>
                                        <button type="button" class="btn btn-outline-primary m-1 text-dark">
                                            <img src={group1} alt='q'/>
                                            Problem Solving</button>
                                        <button type="button" class="btn btn-outline-primary m-1 text-dark">
                                            <img src={group2} alt='q'/>
                                            Creativity</button>
                                        <button type="button" class="btn btn-outline-primary m-1 text-dark">
                                            <span><img src={group3} alt='q'/></span>
                                            Leadership</button>
                                        <button type="button" class="btn btn-outline-primary m-1 text-dark">
                                            <img src={group4} alt='q'/>
                                            Music</button>
                                        <button type="button" class="btn btn-outline-primary m-1 text-dark">
                                            <img src={group5} alt='q'/>
                                            Creativity</button>
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='lablename'>
                                    <label>
                                        CHANNEL DISCRIPTION
                                    </label>
                                </div>
                                <div className=' '>
                                    <textarea class="form-control textinput mt-2" id="exampleFormControlTextarea1" rows="3"></textarea>

                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='lablename'>
                                    <label>
                                        CHANNEL PRIVACY
                                    </label>
                                </div>
                                <div className='mx-3 '>
                                    <div className='textsublable d-inline-block ' >
                                        PUBLIC
                                    </div>
                                    <div className='d-inline-block p-2' >
                                        <label class="switch">
                                            <input type="checkbox" />
                                            <span class="slider"></span>

                                        </label>
                                    </div>
                                    <div className='d-inline-block m1' >
                                        <label className='textsublable'>
                                            PRIVATE
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='lablename'>
                                    <label>
                                        CHANNEL OBJECTIVES
                                    </label>
                                </div>
                                <div className='row m-1  d-flex'>

                                    <div className='col-2 col-sm-1 col-xl-1 ' >
                                        <input className='inputcheckbox' type="checkbox" />

                                    </div>
                                    <div className='col-10  col-sm-11 col-xl-11 ' >
                                        <label className='textsublable'>
                                            LEARNING
                                        </label>
                                    </div>
                                </div>
                                <div className='row m-1  d-flex'>

                                    <div className='col-2 col-sm-1 col-xl-1 ' >
                                        <input className='inputcheckbox' type="checkbox" />

                                    </div>
                                    <div className='col-10  col-sm-11 col-xl-11 ' >
                                        <label className='textsublable'>
                                            BRANDING
                                        </label>
                                    </div>
                                </div>
                                <div className='row m-1  d-flex'>

                                    <div className='col-2 col-sm-1 col-xl-1 ' >
                                        <input className='inputcheckbox' type="checkbox" />

                                    </div>
                                    <div className='col-10  col-sm-11 col-xl-11 ' >
                                        <label className='textsublable'>
                                            NETWORKING
                                        </label>
                                    </div>
                                </div>
                                <div className='row m-1  d-flex'>

                                    <div className='col-2 col-sm-1 col-xl-1 ' >
                                        <input className='inputcheckbox' type="checkbox" />

                                    </div>
                                    <div className='col-10  col-sm-11 col-xl-11 ' >
                                        <label className='textsublable'>
                                            COACHING
                                        </label>
                                    </div>
                                </div>
                                <div className='row m-1  d-flex'>

                                    <div className='col-2 col-sm-1 col-xl-1 ' >
                                        <input className='inputcheckbox' type="checkbox" />

                                    </div>
                                    <div className='col-10  col-sm-11 col-xl-11 ' >
                                        <label className='textsublable'>
                                            EARNING
                                        </label>
                                    </div>
                                </div>
                                <div className='row m-1  d-flex'>

                                    <div className='col-2 col-sm-1 col-xl-1 ' >
                                        <input className='inputcheckbox' type="checkbox" />

                                    </div>
                                    <div className='col-10  col-sm-11 col-xl-11 ' >
                                        <label className='textsublable'>
                                            All
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-2'>

                                <div className='mx-3 '>
                                    <div className='lablename d-inline-block ' >
                                        ADD SUBCOMMUNITY?
                                    </div>
                                    <div className='d-inline-block p-2' >
                                        <label class="switch">
                                            <input type="checkbox" />
                                            <span class="slider"></span>

                                        </label>
                                    </div>

                                </div>
                            </div>
                            <div className='row mt-2'>

                                <div className='mx-3 '>
                                    <div className='lablename d-inline-block ' >
                                        ADD BRANDING PAGE?
                                    </div>
                                    <div className='d-inline-block p-2' >
                                        <label class="switch">
                                            <input type="checkbox" />
                                            <span class="slider"></span>

                                        </label>
                                    </div>

                                </div>
                            </div>

                            <div className='row mt-3'>

                                <div className='lableques mx-2' >
                                    Which page do you want to use as a branding page?
                                </div>


                            </div>

                            <div className='row mt-3 p-0'>

                                <div className='col-12 col-sm-12 col-xl-12 ' >
                                    <div className='col-3 mb-2  col-sm-3 col-xl-3 container d-inline-block  p-0'>
                                        <div className='row'>
                                            <div>
                                                <img alt='q' className='brandingpage' src={rectangle} />
                                            </div>
                                        </div>
                                        <div className='row-cols-1  mt-1'>
                                            <input className='radiobox' type="radio" />
                                        </div>
                                    </div>
                                    <div className='col-3 mb-2 col-sm-3 col-xl-3 container d-inline-block  p-0'>
                                        <div className='row '>
                                            <div >
                                                <img alt='q' className='brandingpage' src={rectangle} />
                                            </div>
                                        </div>
                                        <div className='row-cols-1  mt-1'>
                                            <input className='radiobox' type="radio" />
                                        </div>
                                    </div>
                                    <div className='col-3 mb-2 col-sm-3 col-xl-3 container d-inline-block  p-0'>
                                        <div className='row '>
                                            <div >
                                                <img alt='q' className='brandingpage' src={rectangle} />
                                            </div>
                                        </div>
                                        <div className='row-cols-1  mt-1'>
                                            <input className='radiobox' type="radio" />
                                        </div>
                                    </div>
                                    <div className='col-3 mb-2 col-sm-3 col-xl-3 container d-inline-block  p-0'>
                                        <div className='row '>
                                            <div >
                                                <img alt='q' className='brandingpage' src={rectangle} />
                                            </div>
                                        </div>
                                        <div className='row-cols-1  mt-1'>
                                            <input className='radiobox' type="radio" />
                                        </div>
                                    </div>
                                    <div className='col-3 mb-2 col-sm-3 col-xl-3 container d-inline-block  p-0'>
                                        <div className='row '>
                                            <div >
                                                <img className='brandingpage' alt='q' src={rectangle} />
                                                <img className='brandingimg' alt='q' src={barndp} />
                                            </div>
                                        </div>
                                        <div className='row-cols-1  mt-1'>
                                            <input className='radiobox' type="radio" />
                                        </div>
                                    </div>

                                </div>
                                <div className=' ' >
                                    .                                .
                                </div>


                            </div>



                        </div>
                    </div>

                </div>

            </section>



        </main >
    );
};