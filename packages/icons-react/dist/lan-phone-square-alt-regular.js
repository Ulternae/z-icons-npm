import React from 'react';

export const LanPhoneSquareAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm296 32.7 2.8.8c32.3 8.8 59.9 40.1 51.8 78.2-18.5 87.5-87.4 156.3-174.9 174.9-38.1 8.1-69.4-19.5-78.2-51.8l-.8-2.8c-2.7-9.8 2.4-20.1 11.8-24l48.7-20.3c8.3-3.4 17.8-1.1 23.5 5.9l12.3 15c34.3-17.3 62-45.9 78.1-80.9l-13.6-11.1c-6.9-5.7-9.3-15.2-5.9-23.5l20.3-48.7c3.9-9.4 14.2-14.4 24-11.8z"})
);

export default LanPhoneSquareAltRegular;
