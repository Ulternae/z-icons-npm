import React from 'react';

export const LanFont = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32c6.4 0 12.2 3.8 14.7 9.8L442.6 448H480c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h39.9l-40.6-96H144.8l-40.6 96h39.9c8.8 0 16 7.2 16 16s-7.2 16-16 16H32c-8.8 0-16-7.2-16-16s7.2-16 16-16h37.4L241.3 41.8c2.5-5.9 8.3-9.8 14.7-9.8m-97.7 288h195.4L256 89.1z"})
);

export default LanFont;
