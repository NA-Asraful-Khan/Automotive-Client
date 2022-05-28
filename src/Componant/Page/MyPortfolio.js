import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import profile from '../../Images/profile.jpg'

const MyPortfolio = () => {
    return (
        <div>
            <div class="card w-6/12 bg-base-100 shadow-xl m-auto text-left">
                <div class="avatar my-8">
                    <div class="m-auto w-2/4 rounded-full">
                        <img src={profile} alt="" />
                    </div>
                </div>
                <div class="card-body ml-8">
                    <h2 class="card-title"><span className='text-muted'>Name :</span> Nur A Asraful Khan</h2>
                    <div className="divider m-1"></div>
                    <h2 class="card-title"><span className='text-muted'>Email :</span> n.a.asraful.khan</h2>
                    <div className="divider m-1"></div>
                    <h2 className='text-center'>Education Background</h2>
                    <h2 class="card-title"><span className='text-muted'>SSC (4.63) : </span>Bangladesh German Technical Trianing Center. </h2>
                    <h2 class="card-title"><span className='text-muted'>Diploma in printing (2.49) : </span>Govt. Graphics Arts Institute </h2>
                    <h2 class="card-title"><span className='text-muted'>BSc in CSE (2nd Semester) : </span>Bangladesh University </h2>
                    <div className="divider m-1"></div>
                    <h2 className='text-center'>Skills</h2>
                    <h2 class="card-title"><span className='text-muted'>Frontend : </span>HTML, CSS,BOOTSTRAP,TAILWIND CSS,REACT, REACT ROUTER, FIREBASE </h2>
                    <h2 class="card-title"><span className='text-muted'>Backend : </span>expressjs, nodejs</h2>
                    <div className="divider m-1"></div>
                    <h2 className='text-center'>Project Link</h2>
                    <h2 className="card-title"><span className='text-muted'>1. AutoMobile Inventories:</span><a href="https://inventory-7521f.web.app/" target="_blank">AutoMobile Inventories
                    </a></h2>
                    <h2 className="card-title"><span className='text-muted'>2. ANGELS MAKEUP :</span><a href="https://serviceing-6e26a.web.app/" target="_blank">ANGELS MAKEUP</a></h2>

                    <h2 className="card-title"><span className='text-muted'>3. Phptography :</span><a href="https://photoprahy-routing.netlify.app/" target="_blank">Phptography</a></h2>
                    <div className="divider m-1"></div>

                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;