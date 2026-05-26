import React from 'react';

export const LanPersonDressSimple = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 256 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160.1 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m114.8 166.3c-6.5-22.7-27.2-38.3-50.8-38.3s-44.3 15.6-50.8 38.3L42.5 352h171.2zm-132.4-8.8c10.4-36.4 43.7-61.5 81.6-61.5s71.2 25.1 81.6 61.5l34.8 121.7c5.8 20.4-9.5 40.8-30.8 40.8h-21.6v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V384h-64v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V384H42.5c-21.3 0-36.6-20.3-30.8-40.8z"})
);

export default LanPersonDressSimple;
