import React from 'react';

export const LanDirectionUpDownRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 320 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M302 382.5c3.8 8.8 2 19-4.5 26l-120 128c-4.5 4.8-10.9 7.6-17.5 7.6s-13-2.7-17.5-7.6l-120-128c-6.5-7-8.3-17.2-4.5-26S30.4 368 40 368h48V144H40c-9.6 0-18.2-5.7-22-14.5s-2-19 4.5-26l120-128C147-29.3 153.4-32 160-32s13 2.7 17.5 7.6l120 128c6.5 7 8.3 17.2 4.5 26S289.6 144 280 144h-48v224h48c9.6 0 18.2 5.7 22 14.5M224.6 416H208c-6.4 0-12.5-2.5-17-7s-7-10.6-7-17V120c0-13.3 10.7-24 24-24h16.6L160 27.1 95.4 96H112c6.4 0 12.5 2.5 17 7s7 10.6 7 17v272c0 13.3-10.7 24-24 24H95.4l64.6 68.9z"})
);

export default LanDirectionUpDownRegular;
