// Importations

import React, { useState } from 'react';
import CollapseSection from './CollapseSection';

// Définition de la fonction "Collapse" 

function Collapse({ page, sections }) {

    const [activeIndex, setActiveIndex] = useState(false);

    if (page === "about") {
        return ( // Collapse page "About"
            <React.Fragment>
                {sections.map((section, index) => (
                    <CollapseSection
                        section={section}
                        key={index}
                        isActiveSection={index === activeIndex}
                        setActiveIndex={setActiveIndex}
                        sectionIndex={index}
                        collapseContainerClass="main__collapse__container"
                        collapseHeadingClass="main__collapse__about__h1"
                        collapseDropdownClass="main__collapse__dropdown"
                    />
                ))}
            </React.Fragment>
        );
    } else {
        return ( // Collapse page "Housing"
            <React.Fragment>
                {sections.map((section, index) => (
                    <CollapseSection
                        section={section}
                        key={index}
                        isActiveSection={index === activeIndex}
                        setActiveIndex={setActiveIndex}
                        sectionIndex={index}
                        collapseContainerClass="main__collapse__container__housing"
                        collapseHeadingClass="main__collapse__housing__h1"
                        collapseDropdownClass="main__collapse__dropdown__housing"
                    />
                ))}
            </React.Fragment>
        );
    }

}

// Exportation de la fonction "Collapse"

export default Collapse;