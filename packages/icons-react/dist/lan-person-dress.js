import React from 'react';

export const LanPersonDress = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M216 24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-80 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0m-11.4 173.9L44.5 298c-5.5 6.9-15.6 8-22.5 2.5s-8-15.6-2.5-22.5l108.8-136c15.2-19 38.2-30 62.5-30h2.5c24.3 0 47.3 11 62.5 30l108.7 136c5.5 6.9 4.4 17-2.5 22.5s-17 4.4-22.5-2.5l-80.1-100.1L313.2 363c3.4 10.3-4.3 21-15.2 21h-42v144c0 8.8-7.2 16-16 16s-16-7.2-16-16V384h-64v144c0 8.8-7.2 16-16 16s-16-7.2-16-16V384H86c-10.9 0-18.6-10.6-15.2-21l53.7-165.1zM275.9 352 214 161.5c-3.1-9.5-12-15.9-21.9-15.9s-18.9 6.4-22 15.9l-62 190.5H276z"})
);

export default LanPersonDress;
