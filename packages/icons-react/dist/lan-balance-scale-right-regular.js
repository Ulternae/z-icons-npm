import React from 'react';

export const LanBalanceScaleRightRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M97.5 16.7c-4 12.6 2.9 26.1 15.5 30.2l127.7 40.8c3.1 32.4 25.5 59.2 55.6 68.6V464h-176c-13.3 0-24 10.7-24 24s10.7 24 24 24h200c13.3 0 24-10.7 24-24V156.3c14.2-4.5 26.8-12.8 36.4-23.8L513 174.9c12.6 4 26.1-2.9 30.2-15.5s-2.9-26.1-15.5-30.2L399.9 88.3c.3-2.7.4-5.5.4-8.3 0-44.2-35.8-80-80-80-29.8 0-55.8 16.3-69.6 40.5l-123-39.4c-12.6-4-26.1 2.9-30.2 15.5zm30.9 147.1L200.8 288H55.9l72.4-124.2zm126 141.3c2.6-11-1-22.3-6.7-32.1l-95.3-163.2c-5-8.6-14.2-13.8-24.1-13.8s-19.1 5.3-24.1 13.8L9.1 273.1c-5.7 9.8-9.3 21.1-6.7 32.1 10.8 44.8 63.1 78.9 126 78.9s115.2-34 126-78.9zM583.6 416H438.7l72.4-124.2L583.5 416zm-72.4 96c62.9 0 115.2-34 126-78.9 2.6-11-1-22.3-6.7-32.1l-95.2-163.2c-5-8.6-14.2-13.8-24.1-13.8s-19.1 5.3-24.1 13.8l-95.2 163.3c-5.7 9.8-9.3 21.1-6.7 32.1 10.8 44.8 63.1 78.9 126 78.9zM320.3 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
);

export default LanBalanceScaleRightRegular;
