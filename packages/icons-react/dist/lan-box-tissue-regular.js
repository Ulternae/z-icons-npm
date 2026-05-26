import React from 'react';

export const LanBoxTissueRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M167.4 304 122.6 80h130.9l13.8 41.3c10.8 32.7 41.3 54.7 75.8 54.7h41.3l-36.6 128zm97.5-272H103c-20.2 0-35.3 18.5-31.3 38.3l51.2 256c3 15 16.1 25.7 31.4 25.7h205.6c14.3 0 26.8-9.5 30.8-23.2l45.7-160c5.8-20.4-9.5-40.8-30.8-40.8h-62.5c-13.8 0-26-8.8-30.4-21.9l-17.4-52.2C290.9 40.8 278.7 32 264.9 32M59.8 256H48c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48h-2.6l-13.7 48h16.4v128h-416V304h21.4l-9.6-48z"})
);

export default LanBoxTissueRegular;
