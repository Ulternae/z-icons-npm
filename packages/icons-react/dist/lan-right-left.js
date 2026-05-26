import React from 'react';

export const LanRightLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M476.7 128 384 220.7V35.3zm-95-128C365.3 0 352 13.3 352 29.7V112H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h336v82.3c0 16.4 13.3 29.7 29.7 29.7 7.9 0 15.4-3.1 21-8.7L505 145c4.5-4.5 7-10.6 7-17s-2.5-12.5-7-17L402.6 8.7C397 3.1 389.5 0 381.6 0zM496 400c8.8 0 16-7.2 16-16s-7.2-16-16-16H160v-82.3c0-16.4-13.3-29.7-29.7-29.7-7.9 0-15.4 3.1-21 8.7L7 367c-4.5 4.5-7 10.6-7 17s2.5 12.5 7 17l102.4 102.3c5.6 5.6 13.1 8.7 21 8.7 16.4 0 29.7-13.3 29.7-29.7V400h336zM128 291.3v185.4L35.3 384z"})
);

export default LanRightLeft;
