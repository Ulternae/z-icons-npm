import React from 'react';

export const LanHryvniaSign = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M332 138.8c0-67.6-63.1-117.6-128.9-102l-116 27.3c-8.6 2-13.9 10.6-11.9 19.2s10.6 14 19.2 12l116-27.4c45.7-10.8 89.5 23.9 89.5 70.9 0 20.4-8.6 39.6-23.1 53.2H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h352.1c8.8 0 16-7.2 16-16s-7.2-16-16-16h-50.5c9.3-15.8 14.5-34.2 14.5-53.2zM368.3 288H15.7C7 288.2 0 295.3 0 304c0 8.8 7.2 16 16 16h53.5C58.3 336.1 52 355.4 52 375.7c0 59.2 52.5 104.6 111 96.2l152.7-22c8.7-1.3 14.8-9.4 13.6-18.1s-9.4-14.8-18.1-13.5l-152.7 22C119.2 446 84 415.5 84 375.8c0-22.8 11.9-43.9 31.3-55.7L368 320c8.8 0 16-7.2 16-16 0-8.7-7-15.8-15.7-16"})
);

export default LanHryvniaSign;
