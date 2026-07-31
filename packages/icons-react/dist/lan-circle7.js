import React from 'react';

export const LanCircle7 = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-48-352c-8.8 0-16 7.2-16 16s7.2 16 16 16h82.5l-87.9 135.3c-4.8 7.4-2.7 17.3 4.7 22.1s17.3 2.7 22.1-4.7l104-160c3.2-4.9 3.4-11.2.6-16.4s-8.1-8.3-14-8.3z"})
);

export default LanCircle7;
