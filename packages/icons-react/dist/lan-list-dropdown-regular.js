import React from 'react';

export const LanListDropdownRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 192v224c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V192zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm112 168c0-13.3 10.7-24 24-24h176c13.3 0 24 10.7 24 24s-10.7 24-24 24H136c-13.3 0-24-10.7-24-24m0 96c0-13.3 10.7-24 24-24h176c13.3 0 24 10.7 24 24s-10.7 24-24 24H136c-13.3 0-24-10.7-24-24M304 80c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l32 32c6.2 6.2 16.4 6.2 22.6 0l32-32c4.6-4.6 5.9-11.5 3.5-17.4S374.5 80 368 80z"})
);

export default LanListDropdownRegular;
