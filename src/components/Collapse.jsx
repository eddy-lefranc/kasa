// Importations

import React, { useState } from 'react';
import CollapseSection from './CollapseSection';

// Définition de la fonction "Collapse" 

function Collapse({ sections }) {
    const [activeIndex, setActiveIndex] = useState(false);
    return (
        <React.Fragment>
            {sections.map((section, index) => (
                <CollapseSection
                    section={section}
                    key={index}
                    isActiveSection={index === activeIndex}
                    setActiveIndex={setActiveIndex}
                    sectionIndex={index}
                />
            ))}
        </React.Fragment>
    );
}

// Exportation de la fonction "Collapse"

export default Collapse;