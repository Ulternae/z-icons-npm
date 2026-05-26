import React from 'react';

export const LanSausageRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m447.5 69.3 15.2-41.9c.8-2.2 1.2-4.6 1.2-7 0-11.3-9.1-20.4-20.4-20.4h-55.1C377.1 0 368 9.1 368 20.4c0 2.4.4 4.7 1.2 7l15.2 41.9c-37.5 13-64.5 48.7-64.5 90.7 0 88.4-71.6 160-160 160-42 0-77.7 26.9-90.7 64.5l-41.8-15.3c-2.2-.8-4.6-1.2-7-1.2C9.1 368 0 377.1 0 388.4v55.2C0 454.9 9.1 464 20.4 464c2.4 0 4.7-.4 7-1.2l41.9-15.2c13 37.5 48.7 64.5 90.7 64.5 194.4 0 352-157.6 352-352 0-42-26.9-77.7-64.5-90.7zM112 416c0-26.5 21.5-48 48-48 114.9 0 208-93.1 208-208 0-26.5 21.5-48 48-48s48 21.5 48 48c0 167.9-136.1 304-304 304-26.5 0-48-21.5-48-48"})
);

export default LanSausageRegular;
