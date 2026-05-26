import React from 'react';

export const LanPhoneSquareDownRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm364.9 215.1c-5.1 8.9-15.9 12.6-25.3 8.7l-48.7-20.1c-8.3-3.4-13.3-11.9-12.5-20.8l1.7-17.5c-36.1-13.3-75.9-14-112.4-1.9l1.9 19.4c.9 8.9-4.2 17.4-12.5 20.8l-48.7 20.1c-9.4 3.9-20.3.2-25.3-8.7l-1.4-2.5c-16.6-29.1-14-70.7 18.7-92 75-48.8 172.3-48.8 247.3 0 32.7 21.3 35.3 62.9 18.7 92l-1.4 2.5z"})
);

export default LanPhoneSquareDownRegular;
