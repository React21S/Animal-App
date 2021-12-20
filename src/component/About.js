import React from 'react';
import {Link} from "react-router-dom"


const About = () => {
   
    return (
        <div className="about">
            <h2> Research history about the animal</h2>
            
            <div className="history">
                <h3>
                Animal history is a methodologically and politically challenging type of historical research that attempts to approximate the past as it occurred for other species on the planet without overstepping what is knowable. It requires some radical interdisciplinarity—the willingness to draw (potentially) from fields ranging from philosophy to veterinary medicine to find principles or theories with which to read historical sources for evidence. Since a handful of formative studies put animals on our historical radar about twenty years ago, animal history has ballooned, and many historians are turning to it as “side projects” to dissertations, or as a second book project after pursuing more conventional topics and methodologies. 
                <a href="https://www.oah.org/tah/issues/2015/november/animal-history-the-final-frontier/" target="_blank" rel="noreferrer" > Read more </a>
                </h3>
            </div>
        </div>
    );
};

export default About;