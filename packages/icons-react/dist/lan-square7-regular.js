import React from 'react';

export const LanSquare7Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm168 48h112c8.3 0 16 4.3 20.4 11.4s4.8 15.9 1 23.4l-88 176c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2L241.2 192H168c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
);

export default LanSquare7Regular;
