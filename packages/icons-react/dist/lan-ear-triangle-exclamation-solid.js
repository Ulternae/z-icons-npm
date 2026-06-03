import React from 'react';

export const LanEarTriangleExclamationSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 543.8',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M176 506.3c0 1.6 0 3.2.1 4.7C112.9 503.2 64 449.3 64 384V192C64 86 150 0 256 0s192 86 192 192c0 4.6-.2 9.1-.5 13.5-14-8.7-30.4-13.5-47.5-13.5-31.8 0-61.3 16.8-77.5 44.1L188 462.7c-7.8 13.2-12 28.3-12 43.6m199.6-360.1C357.1 98.1 310.5 64 256 64c-70.7 0-128 57.3-128 128v40c0 13.3 10.7 24 24 24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16c-13.3 0-24 10.7-24 24s10.7 24 24 24h16c39.8 0 72-32.2 72-72 0-37.1-28-67.6-64-71.6V192c0-44.2 35.8-80 80-80 33.9 0 62.8 21 74.5 50.8 13.8-8.1 29.1-13.7 45.1-16.6M229.2 487.3l134.5-226.6c7.6-12.8 21.4-20.6 36.3-20.6s28.7 7.8 36.3 20.6l134.5 226.6c3.4 5.8 5.2 12.4 5.2 19.1 0 20.7-16.8 37.4-37.4 37.4H261.5c-20.7 0-37.4-16.8-37.4-37.4 0-6.7 1.8-13.3 5.2-19.1zM416 327.2c0-8.8-7.2-16-16-16s-16 7.2-16 16v80.9c0 8.8 7.2 16 16 16s16-7.2 16-16zm-16 176.9a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanEarTriangleExclamationSolid;
