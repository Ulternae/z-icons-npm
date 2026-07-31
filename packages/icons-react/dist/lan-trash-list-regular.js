import React from 'react';

export const LanTrashListRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 640 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M166.2-16c-13.3 0-25.3 8.3-30 20.8L120 48H56c-13.3 0-24 10.7-24 24s10.7 24 24 24h368c13.3 0 24-10.7 24-24s-10.7-24-24-24h-64L343.8 4.8c-4.7-12.5-16.6-20.8-30-20.8zM60.7 144l22.9 308.7c2.5 33.4 30.3 59.3 63.8 59.3h185.1c33.5 0 61.3-25.9 63.8-59.3L419.2 144h-48.1l-22.6 305.2c-.6 8.4-7.6 14.8-16 14.8H147.4c-8.4 0-15.3-6.5-16-14.8L108.9 144zM504 128c-13.3 0-24 10.7-24 24s10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 128c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-24 152c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24"})
);

export default LanTrashListRegular;
