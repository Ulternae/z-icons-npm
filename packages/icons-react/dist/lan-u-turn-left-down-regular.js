import React from 'react';

export const LanUTurnLeftDownRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M180.2 505.2c-12.8 10.3-28 7.2-37.7 1.1l-4-3-1-1L25.8 390.6l-3.3-3.9c-14.8-20.3-.6-50.7 26-50.7h32V216l.3-11.1C86.5 90.7 180.9 0 296.5 0s209.9 90.7 215.7 204.9l.3 11.1v200c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32V216l-.3-5.7c-2.9-28.3-26.7-50.3-55.7-50.3s-52.9 22-55.7 50.3l-.3 5.7v120h32c24.4 0 39.2 26.2 28.3 47l-1.9 3-1.4 1.9-2.3 2.7-112 112-2.9 2.6zM233.8 384h-17.4c-13.3 0-24-10.7-24-24V216l.1-5.3c2.8-55 48.2-98.7 103.9-98.7s101.1 43.7 103.9 98.7l.1 5.3v184h64V216l-.2-8.7C459.7 118.6 386.3 48 296.5 48s-163.3 70.6-167.8 159.3l-.2 8.7v144c0 13.3-10.7 24-24 24H87.1l73.4 73.4 73.4-73.4z"})
);

export default LanUTurnLeftDownRegular;
