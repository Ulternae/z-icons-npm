import React from 'react';

export const LanSunriseSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -15.968 576 527.968',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M520.4 464c13.3 0 24 10.7 24 24s-10.7 24-24 24h-464c-13.3 0-24-10.7-24-24s10.7-24 24-24zM375.1 200.8c6.8-5 15.7-6.1 23.5-2.9s13.3 10.3 14.6 18.7L429 323.4l106.9 15.8c8.3 1.2 15.4 6.8 18.6 14.6s2.1 16.7-2.9 23.5L522.8 416h-98.7c-.8-2.4-1.7-4.8-2.7-7.1C391 335.4 306.7 300.5 233.3 331c-39.3 16.3-67.5 47.9-80.7 85.1L54 416l-28.8-38.7c-5-6.8-6.1-15.7-2.9-23.5s10.3-13.3 18.7-14.6l106.8-15.8 15.8-106.8.7-3c2-7 7.1-12.8 13.9-15.6 7.8-3.2 16.7-2.1 23.5 2.9l86.7 64.3 86.7-64.3zM251.7 375.3c45.1-18.7 96.2-.5 119.9 40.7H205.4c10.2-17.7 26-32.3 46.3-40.7m21.6-385.9c9.4-7.7 23.3-7.1 32.1 1.7l64 64c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-23-23v102.1c0 13.3-10.7 24-24 24s-24-10.7-24-24V66l-23 23c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l64-64 1.8-1.7z"})
);

export default LanSunriseSolid;
