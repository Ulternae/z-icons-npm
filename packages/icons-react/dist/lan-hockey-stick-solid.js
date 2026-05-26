import React from 'react';

export const LanHockeyStickSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 512H64c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32h32zM450.3-11.9c6.6-16.4 25.2-24.4 41.6-17.8s24.4 25.2 17.8 41.6L333.8 451.7c-14.6 36.4-49.9 60.3-89.2 60.3H143.9V320h173.5L450.1-11.9z"})
);

export default LanHockeyStickSolid;
