import React from 'react';

export const LanCircleManat = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-16-392v9.1c-54.3 7.8-96 54.4-96 110.9v112c0 8.8 7.2 16 16 16s16-7.2 16-16V240c0-38.7 27.5-71 64-78.4V352c0 8.8 7.2 16 16 16s16-7.2 16-16V161.6c36.5 7.4 64 39.7 64 78.4v112c0 8.8 7.2 16 16 16s16-7.2 16-16V240c0-56.4-41.7-103.1-96-110.9V120c0-8.8-7.2-16-16-16s-16 7.2-16 16"})
);

export default LanCircleManat;
