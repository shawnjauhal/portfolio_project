import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas, faCode, faGamepad, faLock } from '@fortawesome/free-solid-svg-icons'


const Specialties = () => {
    return (
        <div className="specialties">
            <h1 className="py-5">Specialties and Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faGlobeAmericas} size="6x" /></div>
                                <h3>Web Design</h3>
                                <p>After graduating SDSU I have been focused on learning React and Node.js and have an interest in learning Angular.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faCode} size="6x" /></div>
                                <h3>Software Development</h3>
                                <p>I have a strong background in Java, C, and Python and am always interested in furthering my skills with these languages.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faGamepad} size="6x" /></div>
                                <h3>Unity Development</h3>
                                <p>Having took game development in college, I enjoy playing around with the Unity game engine when my time permits.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faLock} size="6x" /></div>
                                <h3>Cyber Security</h3>
                                <p>With a background in Cyber Security Competitions in college, I have always had a fascination with cyber security.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specialties