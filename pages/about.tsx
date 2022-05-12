import React from 'react';
import { NextPage } from 'next';
import SocialIcons from '../components/SocialIcons';
import { GoLocation } from 'react-icons/go';
import { FcPhoneAndroid } from 'react-icons/fc';
import { AiOutlineMail } from 'react-icons/ai';
import Footer from '../components/Footer';

const About: NextPage = () => {
    return (
        <>
            <SocialIcons theme={''} />
            <div className="about_container">
                <section className="about_content">
                    <div className="image">
                        <div className="pic"></div>
                    </div>
                    <div className="name">
                        Leonard Mustatea
                        <div className="position">HEAD of QA Technology</div>
                    </div>
                    <div className="personal_info">
                        <div className="personal">
                            <h3>Personal</h3>
                            <ul className="personal_details">
                                <li>
                                    <GoLocation />
                                    <span>Floresti, Cluj, RO</span>
                                </li>
                            </ul>
                        </div>
                        <div className="contact">
                            <h3>Contact</h3>
                            <ul className="personal_details">
                                <li>
                                    <FcPhoneAndroid />
                                    <span>{`(+40) 747 155 550`}</span>
                                </li>
                                <li>
                                    <AiOutlineMail />
                                    <span>leonard.mustatea@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="about_me">
                        <h3>About me</h3>
                        <p>
                            I have a clear, logical mind with a practical approach to problem-solving and a drive to see
                            things through to completion. I have more than 7 years of experience in managing and leading
                            teams across multiple sectors. I also have a genuine interest in tech with a proven track
                            record in creating test automation frameworks in different programming languages and other
                            QE related tools and apps. My greatest passion is in life is using my technical know-how to
                            benefit other people and organizations.
                        </p>
                    </div>
                    <div className="skills">
                        <h3>Skills</h3>
                        <p>Javascript / Typescript</p>
                        <p>Java</p>
                        <p>C#</p>
                        <p>PHP</p>
                        <br />
                        <p>React / NextJS</p>
                        <p>NodeJS / Express / NestJS</p>
                        <p>Selenium Webdriver</p>
                        <p>WebdriverIO</p>
                        <p>Protractor</p>
                        <p>Ranorex</p>
                        <p>JMeter / BlazeMeter / K6</p>
                        <p>Pactflow</p>
                        <br />
                        <p>MongoDB</p>
                        <p>Postgres</p>
                        <p>MySQL</p>
                        <br />
                        <p>Docker</p>
                        <p>Kubernetes</p>
                    </div>
                    <div className="hobbies">
                        <h3>Hobbies</h3>
                        <p>OUTDOORS - CODING - GAMING - GYM - MOVIES - READING</p>
                    </div>
                    <div className="interests">
                        <h3>Interests</h3>
                        <p>Machine Learning</p>
                        <p>DevOps</p>
                    </div>
                    <div className="experience">
                        <h3>Employment history</h3>
                        <ul className="job_details">
                            <li className="details_container">
                                <span className="title">QA Automation Lead | Senior QA Automation Engineer</span>
                                <span className="employer">HEITS.digital</span>
                                <span className="period">Dec 2020 - April 2022</span>
                                <span className="location">Cluj County, Romania</span>
                                <ul className="details">
                                    <li>Managing automation team/s</li>
                                    <li>Support projects in their digital transformation</li>
                                </ul>
                            </li>
                            <li className="details_container">
                                <span className="title">QA Automation Lead</span>
                                <span className="employer">Cognizant Softvision</span>
                                <span className="period">May 2019 - Dec 2020</span>
                                <span className="location">Cluj County, Romania</span>
                                <ul className="details">
                                    <li>Managing automation team/s</li>
                                    <li>Support projects in their digital transformation</li>
                                </ul>
                            </li>
                            <li className="details_container">
                                <span className="title">QA Lead | Senior QA Automation Engineer</span>
                                <span className="employer">Cognizant Softvision</span>
                                <span className="period">Mar 2018 - May 2019</span>
                                <span className="location">Mason, OH, US</span>
                                <ul className="details">
                                    <li>Managing automation team/s</li>
                                    <li>Create UI and BE automation frameworks for QE teams</li>
                                </ul>
                            </li>
                            <li className="details_container">
                                <span className="title">QA Lead | Senior QA Automation Engineer</span>
                                <span className="employer">Cognizant Softvision</span>
                                <span className="period">Mar 2016 - Feb 2018</span>
                                <span className="location">Cluj County, Romania</span>
                                <ul className="details">
                                    <li>
                                        Create automation frameworks from scratch for various projects using different
                                        tools and technologies
                                    </li>
                                    <li>Offer technical guidance to people spread across more projects</li>
                                    <li>Trainings with junior QAs and/or people switching between technologies</li>
                                    <li>Technical interviews</li>
                                </ul>
                            </li>
                            <li className="details_container">
                                <span className="title">QA Automation Engineer</span>
                                <span className="employer">Cognizant Softvision</span>
                                <span className="period">Dec 2014 - Feb 2016</span>
                                <span className="location">Cluj County, Romania</span>
                                <ul className="details">
                                    <li>
                                        Analyze requirements and create test cases for automation and manual testing
                                    </li>
                                    <li>
                                        Feature test development (automation and manual testing using scripting and
                                        automation tools)
                                    </li>
                                    <li>Develop Test Plan, Test Cases</li>
                                    <li>
                                        Develop web automated testing suite in C# using Ranorex, Selenium Webdriver,
                                        Visual Studio and NUnit
                                    </li>
                                    <li>Maintain and run Regression automation scripts</li>
                                    <li>Defect Reporting, Analyzing, Tracking and Report Generation using JIRA</li>
                                </ul>
                            </li>
                            <li className="details_container">
                                <span className="title">QC Engineer</span>
                                <span className="employer">Cognizant Softvision</span>
                                <span className="period">Sept 2012 - Nov 2014</span>
                                <span className="location">Cluj County, Romania</span>
                                <ul className="details">
                                    <li>Functional testing</li>
                                    <li>
                                        UI testing (Look&Feel and Functional) using Selenium IDE/Webdriver/RC with C#
                                        for different browsers (Firefox, Safari, Chrome, InternetExplorer)
                                    </li>
                                    <li>Create required Testing documents (Test Cases, Test Reports, Bug Reports)</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="education">Education</div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default About;
