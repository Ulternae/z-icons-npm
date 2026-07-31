import React from 'react';

export const LanThumbTack = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48.3 32h39.3L76 188.6c-34.8 26-60.4 64.4-69.9 109.5l-1.2 5.7C-.4 328.6 18.6 352 44 352h296.6c25.4 0 44.4-23.4 39.1-48.2l-1.2-5.7c-9.5-45.1-35.1-83.5-70-109.5L297 32h39.3c8.8 0 16-7.2 16-16s-7.2-16-16-16h-288c-8.8 0-16 7.2-16 16s7.2 16 16 16m59.1 166.2L119.7 32h145.2l12.3 166.2c.3 4.6 2.7 8.9 6.4 11.6l5.8 4.4c28.8 21.5 50 53.2 57.8 90.5l1.2 5.7c1 5-2.7 9.6-7.8 9.6H44c-5.1 0-8.9-4.7-7.8-9.6l1.2-5.7c7.9-37.3 29-69 57.8-90.5l5.8-4.4c3.7-2.8 6-7 6.4-11.6M176.3 400v128c0 8.8 7.2 16 16 16s16-7.2 16-16V400z"})
);

export default LanThumbTack;
