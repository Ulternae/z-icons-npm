import React from 'react';

export const LanSausageSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M320 160c0-42 26.9-77.7 64.5-90.7l-15.3-41.9c-.8-2.2-1.2-4.6-1.2-7C368 9.1 377.1 0 388.4 0h55.2C454.9 0 464 9.1 464 20.4c0 2.4-.4 4.7-1.2 7l-15.3 41.9C485 82.3 512 118 512 160c0 194.4-157.6 352-352 352-42 0-77.7-26.9-90.7-64.5l-41.9 15.3c-2.2.8-4.6 1.2-7 1.2C9.1 464 0 454.9 0 443.6v-55.2C0 377.1 9.1 368 20.4 368c2.4 0 4.7.4 7 1.2l41.9 15.2c13-37.5 48.7-64.5 90.7-64.5 88.4 0 160-71.6 160-160zm92 8c0-11-9-20-20-20s-20 9-20 20c0 112.7-91.3 204-204 204-11 0-20 9-20 20s9 20 20 20c134.8 0 244-109.2 244-244"})
);

export default LanSausageSolid;
