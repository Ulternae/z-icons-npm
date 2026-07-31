import React from 'react';

export const LanDownLeftRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80.1 400h222.1l-71-71c-9.4-9.4-9.4-24.6 0-33.9l151-151L336.1 98l-151 151c-9.4 9.4-24.6 9.4-33.9 0l-71-71v222.1zm-16 48c-17.7 0-32-14.3-32-32V139.3c0-28.5 34.5-42.8 54.6-22.6l81.4 81.4L302.1 64c18.7-18.7 49.1-18.7 67.9 0l46.1 46.1c18.7 18.7 18.7 49.1 0 67.9L282 312l81.4 81.4c20.2 20.2 5.9 54.6-22.6 54.6z"})
);

export default LanDownLeftRegular;
