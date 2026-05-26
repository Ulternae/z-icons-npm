import React from 'react';

export const LanPersonArrowUpFromLineRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M248 24a56 56 0 1 0-112 0 56 56 0 1 0 112 0m-88 143.1c9.9-4.6 20.8-7.1 32-7.1s22.1 2.5 32 7.1V320h-64zm0 328.9V368h64v128zm-48 0H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h528c13.3 0 24-10.7 24-24s-10.7-24-24-24H272V217.6l60.5 84.4c7.7 10.8 22.7 13.2 33.5 5.5s13.2-22.7 5.5-33.5l-79.2-110.5C269.1 131.2 231.8 112 192 112s-77.2 19.2-100.3 51.5L12.5 274c-7.7 10.8-5.2 25.8 5.5 33.5s25.8 5.2 33.5-5.5l60.5-84.4zM561 55l-80-80c-9.4-9.4-24.6-9.4-33.9 0L367 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V200c0 13.3 10.7 24 24 24s24-10.7 24-24V49.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9z"})
);

export default LanPersonArrowUpFromLineRegular;
