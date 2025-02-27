import React from "react";

const SectionContainer = ({ sectionData, hoveredSection, textColor }) => {
  const section = sectionData.sections.find(
    (section) => section.name === hoveredSection
  );

  return (
    <div
      className="flex flex-wrap text-sm"
    >
      {section?.categories.map((category) => (
        <div key={category.id} className="m-2 min-w-56 h-auto">
          <h5 className={`${textColor} font-semibold`}>{category.name}</h5>
          <ul>
            {category.items.map((item, index) => (
              <li key={index} className="cursor-pointer leading-[25px] hover:font-semibold">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SectionContainer;
