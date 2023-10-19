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
import {
    ColorTwoTone
} from '@mui/icons-material'
import { height } from '@mui/system';
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
                                            <img src={group1} />
                                            Problem Solving</button>
                                        <button type="button" class="btn btn-outline-primary m-1 text-dark">
                                            <img src={group2} />
                                            Creativity</button>
                                        <button type="button" class="btn btn-outline-primary m-1 text-dark">
                                            <span><img src={group3} /></span>
                                            Leadership</button>
                                        <button type="button" class="btn btn-outline-primary m-1 text-dark">
                                            <img src={group4} />
                                            Music</button>
                                        <button type="button" class="btn btn-outline-primary m-1 text-dark">
                                            <img src={group5} />
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
                                                <img className='brandingpage' src={rectangle} />
                                            </div>
                                        </div>
                                        <div className='row-cols-1  mt-1'>
                                            <input className='radiobox' type="radio" />
                                        </div>
                                    </div>
                                    <div className='col-3 mb-2 col-sm-3 col-xl-3 container d-inline-block  p-0'>
                                        <div className='row '>
                                            <div >
                                                <img className='brandingpage' src={rectangle} />
                                            </div>
                                        </div>
                                        <div className='row-cols-1  mt-1'>
                                            <input className='radiobox' type="radio" />
                                        </div>
                                    </div>
                                    <div className='col-3 mb-2 col-sm-3 col-xl-3 container d-inline-block  p-0'>
                                        <div className='row '>
                                            <div >
                                                <img className='brandingpage' src={rectangle} />
                                            </div>
                                        </div>
                                        <div className='row-cols-1  mt-1'>
                                            <input className='radiobox' type="radio" />
                                        </div>
                                    </div>
                                    <div className='col-3 mb-2 col-sm-3 col-xl-3 container d-inline-block  p-0'>
                                        <div className='row '>
                                            <div >
                                                <img className='brandingpage' src={rectangle} />
                                            </div>
                                        </div>
                                        <div className='row-cols-1  mt-1'>
                                            <input className='radiobox' type="radio" />
                                        </div>
                                    </div>
                                    <div className='col-3 mb-2 col-sm-3 col-xl-3 container d-inline-block  p-0'>
                                        <div className='row '>
                                            <div >
                                                <img className='brandingpage' src={rectangle} />
                                                <img className='brandingimg' src={barndp} />
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






            {/* <div className={styles.iphone14Pro70}>
                <img
                    className={styles.iphone14Pro70Child}
                    alt=""
                    src="/rectangle-49.svg"
                />
                <div className={styles.search}>
                    <img className={styles.close24pxIcon} alt="" src="/close24px.svg" />
                </div>
                <div className={styles.search1}>
                    <img className={styles.coolicon} alt="" src="/coolicon.svg" />
                </div>
                <div className={styles.search2} />
                <div className={styles.search3} />
                <div className={styles.learntogrow}>LearnToGrow</div>
                <div className={styles.collegeCommunity}>College Community</div>
                <div className={styles.addSkills}>Add Skills</div>
                <div className={styles.addDescription}>Add description...</div>
                <div className={styles.public}>PUBLIC</div>
                <div className={styles.learning}>LEARNING</div>
                <div className={styles.branding}>BRANDING</div>
                <div className={styles.networking}>NETWORKING</div>
                <div className={styles.earning}>EARNING</div>
                <div className={styles.all}>All</div>
                <div className={styles.coaching}>COACHING</div>
                <div className={styles.whichPageDo}>
                    Which page do you want to use as a branding page?
                </div>
                <div className={styles.existing}>Existing</div>
                <div className={styles.new}>New</div>
                <div className={styles.private}>PRIVATE</div>

                <div className={styles.avatar}>
                    <div className={styles.component1}>
                        <img
                            className={styles.component1Child}
                            alt=""
                            src={avtar}
                        />
                    </div>
                </div>
                <div className={styles.iphone14Pro70Item} />
                <div className={styles.iphone14Pro70Inner} />
                <img
                    className={styles.linedesigneditLineIcon}
                    alt=""
                    src="/linedesigneditline.svg"
                />
                <img
                    className={styles.linedesigneditLineIcon1}
                    alt=""
                    src="/linedesigneditline1.svg"
                />
                <div className={styles.createANew}>CREATE A NEW CHANNEL</div>
                <div className={styles.newChannelName}>NEW CHANNEL NAME</div>
                <div className={styles.chooseChannelType}>CHOOSE CHANNEL TYPE</div>
                <div className={styles.chooseTheSubject}>CHOOSE THE SUBJECT</div>
                <div className={styles.chooseTheSkills}>CHOOSE THE SKILLS</div>
                <div className={styles.channelDiscription}>CHANNEL DISCRIPTION</div>
                <div className={styles.channelPrivacy}>CHANNEL PRIVACY</div>
                <div className={styles.channelObjectives}>CHANNEL OBJECTIVES</div>
                <div className={styles.addSubcommunity}>ADD SUBCOMMUNITY?</div>
                <div className={styles.addBrandingPage}>ADD BRANDING PAGE?</div>
                <div className={styles.ellipseDiv} />
                <div className={styles.iphone14Pro70Child1} />
                <div className={styles.iphone14Pro70Child2} />
                <div className={styles.toggle}>
                    <div className={styles.toggleChild} />
                    <div className={styles.toggleItem} />
                </div>
                <div className={styles.toggle1}>
                    <div className={styles.toggleChild} />
                    <div className={styles.toggleItem} />
                </div>
                <div className={styles.toggle2}>
                    <div className={styles.toggleChild} />
                    <div className={styles.toggleItem} />
                </div>
                <div className={styles.checkboxes}>
                    <div className={styles.checkBoxes}>
                        <div className={styles.checkBoxesChild} />
                    </div>
                </div>
                <div className={styles.checkboxes1}>
                    <div className={styles.checkBoxes}>
                        <div className={styles.checkBoxesChild} />
                    </div>
                </div>
                <div className={styles.checkboxes2}>
                    <div className={styles.checkBoxes}>
                        <div className={styles.checkBoxesChild} />
                    </div>
                </div>
                <div className={styles.checkboxes3}>
                    <div className={styles.checkBoxes}>
                        <div className={styles.checkBoxesChild1} />
                    </div>
                    <img className={styles.done24pxIcon} alt="" src="/done24px.svg" />
                </div>
                <div className={styles.checkboxes4}>
                    <div className={styles.checkBoxes}>
                        <div className={styles.checkBoxesChild1} />
                    </div>
                    <img className={styles.done24pxIcon} alt="" src="/done24px.svg" />
                </div>
                <div className={styles.checkboxes5}>
                    <div className={styles.checkBoxes}>
                        <div className={styles.checkBoxesChild1} />
                    </div>
                    <img className={styles.done24pxIcon} alt="" src="/done24px.svg" />
                </div>
                <div className={styles.search4}>
                    <img className={styles.coolicon} alt="" src="/coolicon1.svg" />
                </div>
                <div className={styles.chooseSubject}>Choose Subject</div>
                <img className={styles.headerIcon} alt="" src="/header.svg" />
                <div className={styles.rectangleParent}>
                    <div className={styles.groupChild} />
                    <div className={styles.groupItem} />
                    <div className={styles.groupInner} />
                    <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild1} />
                        <div className={styles.groupChild2} />
                        <div className={styles.problemSolving}>Problem Solving</div>
                        <div className={styles.creativity}>Creativity</div>
                        <div className={styles.creativity1}>Creativity</div>
                        <div className={styles.music}>Music</div>
                        <div className={styles.leadership}>Leadership</div>
                    </div>
                    <img className={styles.groupIcon} alt="" src="/group.svg" />
                    <img className={styles.groupIcon1} alt="" src="/group1.svg" />
                    <img className={styles.groupIcon2} alt="" src="/group2.svg" />
                    <img className={styles.groupIcon3} alt="" src="/group3.svg" />
                    <img className={styles.groupIcon4} alt="" src="/group4.svg" />
                </div>
                <div className={styles.iphone14Pro70Child3} />
                <div className={styles.rectangleContainer}>
                    <div className={styles.groupChild3} />
                    <div className={styles.groupChild4} />
                    <div className={styles.groupChild5} />
                    <img className={styles.coolicon2} alt="" src="/coolicon2.svg" />
                </div>
                <div className={styles.avatar1}>
                    <div className={styles.component11}>
                        <img
                            className={styles.component1Child}
                            alt=""
                            src="/rectangle-61@2x.png"
                        />
                    </div>
                </div>
                <img className={styles.radioButtonIcon} alt="" src="/radio-button.svg" />
                <img
                    className={styles.radioButtonIcon1}
                    alt=""
                    src="/radio-button1.svg"
                />
                <div className={styles.addSocialMedia}>ADD SOCIAL MEDIA</div>
                <div className={styles.iphone14Pro70Child4} />
                <div className={styles.iphone14Pro70Child5} />
                <div className={styles.cancel}>Cancel</div>
                <div className={styles.createChannel}>Create Channel</div>
                <div className={styles.homeIndicator}>
                    <div className={styles.bar}>
                        <div className={styles.base} />
                    </div>
                </div>
                <div className={styles.groupDiv}>
                    <div className={styles.groupChild6} />
                    <div className={styles.groupChild7} />
                    <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
                </div>
                <div className={styles.rectangleParent1}>
                    <div className={styles.groupChild3} />
                    <img className={styles.icon} alt="" src="/174857-1@2x.png" />
                </div>
                <div className={styles.rectangleParent2}>
                    <div className={styles.groupChild3} />
                    <div className={styles.groupChild4} />
                    <div className={styles.groupChild5} />
                    <img className={styles.coolicon2} alt="" src="/coolicon2.svg" />
                </div>
                <img className={styles.whatsapp1Icon} alt="" src="/whatsapp-1@2x.png" />
            </div> */}
        </main >
    );
};