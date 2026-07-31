import React from 'react';

export const LanEarTriangleExclamationRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 543.8',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 48c79.5 0 144 64.5 144 144 17.1 0 33.5 4.8 47.5 13.5.3-4.5.5-9 .5-13.5C448 86 362 0 256 0S64 86 64 192v192c0 65.3 48.9 119.2 112.1 127-.1-1.6-.1-3.2-.1-4.7 0-14.9 3.9-29.5 11.3-42.4-42-2.4-75.3-37.3-75.3-79.9V192c0-79.5 64.5-144 144-144m112 144c0-61.9-50.1-112-112-112s-112 50.1-112 112v40c0 13.3 10.7 24 24 24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16c-13.3 0-24 10.7-24 24s10.7 24 24 24h16c39.8 0 72-32.2 72-72 0-37.1-28-67.6-64-71.6V192c0-35.3 28.7-64 64-64s64 28.7 64 64v8c0 9.4 5.4 17.6 13.3 21.5 9.6-10.5 21.5-18.6 34.7-23.6zM229.2 487.3c-3.4 5.8-5.2 12.4-5.2 19.1 0 20.7 16.8 37.4 37.4 37.4h277.1c20.7 0 37.4-16.8 37.4-37.4 0-6.7-1.8-13.3-5.2-19.1L436.3 260.7c-7.6-12.8-21.4-20.6-36.3-20.6s-28.7 7.8-36.3 20.6zM416 327.2v80.9c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80.9c0-8.8 7.2-16 16-16s16 7.2 16 16m-16 128.9a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanEarTriangleExclamationRegular;
