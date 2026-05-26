import React from 'react';

export const LanPersonDressRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112m-63.8 256 48.4-164.5c2-6.7 8.3-11.5 15.5-11.5s13.5 4.8 15.5 11.5L256 336H128.3zm-.2 48v136c0 13.3 10.7 24 24 24s24-10.7 24-24V384h32v136c0 13.3 10.7 24 24 24s24-10.7 24-24V384h42.6c10.7 0 18.4-10.3 15.4-20.5l-43.6-148.2 62.1 86.7c7.7 10.8 22.7 13.2 33.5 5.5s13.2-22.7 5.5-33.5l-80.2-111.9c-22.5-31.4-58.9-50.1-97.5-50.1h-3.5c-38.7 0-75 18.7-97.5 50.1L12.5 274c-7.7 10.8-5.2 25.8 5.5 33.5s25.8 5.2 33.5-5.5l62.1-86.7L70 363.5c-3 10.2 4.7 20.5 15.4 20.5z"})
);

export default LanPersonDressRegular;
