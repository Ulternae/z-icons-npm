import React from 'react';

export const LanCircleZ = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-64-352c-8.8 0-16 7.2-16 16s7.2 16 16 16h94.7L179.5 326c-3.8 4.8-4.6 11.4-1.9 16.9s8.3 9.1 14.4 9.1h128c8.8 0 16-7.2 16-16s-7.2-16-16-16h-94.7l107.2-134c3.8-4.8 4.6-11.4 1.9-16.9s-8.2-9.1-14.4-9.1z"})
);

export default LanCircleZ;
