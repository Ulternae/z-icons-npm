import React from 'react';

export const LanCaretCircleUp = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-352c-9.6 0-18.7 4-25.2 11l-95.5 102.8c-4.7 5.1-7.3 11.8-7.3 18.7 0 15.2 12.3 27.5 27.5 27.5h201c15.2 0 27.5-12.3 27.5-27.5 0-6.9-2.6-13.6-7.3-18.7L281.2 171c-6.5-7-15.6-11-25.2-11m-1.7 32.7c.4-.5 1.1-.7 1.7-.7s1.3.3 1.7.7l88.4 95.3H165.8l88.4-95.3z"})
);

export default LanCaretCircleUp;
