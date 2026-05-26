import React from 'react';

export const LanBoxTissueThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M103 48h161.9c6.9 0 13 4.4 15.2 10.9l17.4 52.2c6.5 19.6 24.9 32.8 45.5 32.8h62.5c10.6 0 18.3 10.2 15.4 20.4l-45.7 160c-2 6.9-8.2 11.6-15.4 11.6H154.2c-7.6 0-14.2-5.4-15.7-12.9L87.3 67.1C85.4 57.2 92.9 48 103 48m161.9-16H103c-20.2 0-35.3 18.5-31.3 38.3l51.2 256c3 15 16.1 25.7 31.4 25.7h205.6c14.3 0 26.8-9.5 30.8-23.2l45.7-160c5.8-20.4-9.5-40.8-30.8-40.8h-62.5c-13.8 0-26-8.8-30.4-21.9l-17.4-52.2C290.9 40.8 278.7 32 264.9 32M59.8 256H48c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48h-2.6l-4.6 16h7.2c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V304c0-17.7 14.3-32 32-32h15z"})
);

export default LanBoxTissueThin;
