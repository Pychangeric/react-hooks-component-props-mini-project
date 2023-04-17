// About.js

import React from 'react';

function About(props) {
  const { aboutText } = props;
  const defaultImage = "https://via.placeholder.com/215";
  const altText = "blog logo";
  

  return (
    <aside>
      <img src={props.imageSrc || defaultImage} alt={altText} />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;
