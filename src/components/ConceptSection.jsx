import React from 'react';

const ConceptSection = ({ sections }) => {
  return (
    <div className="our-concept-section">
      <div className="concept-banner">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h2 className="concept-title">{section.title}</h2>
            <div className="concept-content">
              <ul className="concept-list">
                {section.items.map((item, itemIdx) => (
                  <li 
                    key={itemIdx}
                    style={section.bottomMargin && itemIdx === section.items.length - 1 ? { marginBottom: '20px' } : {}}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConceptSection;