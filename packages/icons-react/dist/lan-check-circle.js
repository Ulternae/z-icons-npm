import React from 'react';

export const LanCheckCircle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-480a224 224 0 1 0 0 448 224 224 0 1 0 0-448m83.1 134.6c5.2-7.1 15.2-8.7 22.3-3.5s8.7 15.2 3.5 22.3l-128 176c-2.8 3.8-7 6.2-11.7 6.5s-9.3-1.3-12.6-4.6l-64-64c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l50.7 50.7 117-160.8z"})
);

export default LanCheckCircle;
