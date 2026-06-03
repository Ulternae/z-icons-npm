import React from 'react';

export const LanFluteRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -15.925 576 543.95',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m30.1 406.1 408-408c18.7-18.7 49.1-18.7 67.9 0l40 40c18.7 18.7 18.7 49.1 0 67.9L138 514c-18.7 18.7-49.1 18.7-67.9 0l-40-40c-18.7-18.7-18.7-49.1 0-67.9M472 32l-51.5 51.5c6.9 4.2 11.5 11.8 11.5 20.5 0 13.3-10.7 24-24 24-8.7 0-16.3-4.6-20.5-11.5l-31 31c6.9 4.2 11.5 11.8 11.5 20.5 0 13.3-10.7 24-24 24-8.7 0-16.3-4.6-20.5-11.5l-31 31c6.9 4.2 11.5 11.8 11.5 20.5 0 13.3-10.7 24-24 24-8.7 0-16.3-4.6-20.5-11.5L197 307l40 40L512 72zM99.5 404.5 64 440l40 40 99-99-40-40-30.5 30.5c6.9 4.2 11.5 11.8 11.5 20.5 0 13.3-10.7 24-24 24-8.7 0-16.3-4.6-20.5-11.5"})
);

export default LanFluteRegular;
