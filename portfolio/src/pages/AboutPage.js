import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title}/>
            <Content>
            <p>I am a fourth year finance student at the University of Georgia and am pursuing a certificate in Full Stack Web Development from Georgia Tech. Finance courses at UGA have taught me to become data-driven and organized. Balancing both the GA Tech program and undergraduate courses has instilled efficient time management skills and collaboration especially with classmates who are much older and more experienced than I am. I enjoy the teamwork and problem solving aspects of back end development where I have worked with classmates to deliver results in a fast paced environment. I am interested in the defense industry and upon graduation from both the Terry College of Business as well as the bootcamp, I hope to land a job in that industry. I am excited to leverage my analytical, collaboration, and critical thinking skills, in combination with my finance background, to create cost effective and efficient applications.</p>
            </Content>
        </div>
    )
}

export default AboutPage;