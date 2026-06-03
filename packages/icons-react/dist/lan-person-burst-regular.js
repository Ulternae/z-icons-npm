import React from 'react';

export const LanPersonBurstRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -55.9 640 599.9',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M204 40.1c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24s-24 10.7-24 24v48c0 13.3 10.7 24 24 24M4 144.1c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H28c-13.3 0-24 10.7-24 24m92.5 141.4 33.9-33.9c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-33.9 33.9c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0M62.6 2.7c-9.4 9.4-9.4 24.6 0 33.9l33.9 34c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-33.9-34c-9.4-9.4-24.5-9.4-33.9 0M408.4 24a56 56 0 1 0-112 0 56 56 0 1 0 112 0m-88 143.1c9.9-4.6 20.8-7.1 32-7.1s22.1 2.5 32 7.1V320h-64zm0 352.9V368h64v152c0 13.3 10.7 24 24 24s24-10.7 24-24V217.6l60.5 84.4c7.7 10.8 22.7 13.2 33.5 5.5s13.2-22.7 5.5-33.5l-79.2-110.5c-23.1-32.3-60.5-51.5-100.3-51.5s-77.2 19.2-100.3 51.5L172.9 274c-7.7 10.8-5.2 25.8 5.5 33.5s25.8 5.2 33.5-5.5l60.5-84.4V520c0 13.3 10.7 24 24 24s24-10.7 24-24"})
);

export default LanPersonBurstRegular;
