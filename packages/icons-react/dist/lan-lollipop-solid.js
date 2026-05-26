import React from 'react';

export const LanLollipopSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M210.8 334.8C265.3 314.2 304 261.6 304 200v-8c0-61.9-50.1-112-112-112S80 130.1 80 192c0 39.8 32.2 72 72 72s72-32.2 72-72v-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v8c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-35.3 28.7-64 64-64s64 28.7 64 64v8c0 53-43 96-96 96h-8c-57.4 0-104-46.6-104-104 0-79.5 64.5-144 144-144s144 64.5 144 144c0 73.2-54.6 133.6-125.2 142.8M0 192c0 106 86 192 192 192 41.5 0 79.9-13.1 111.2-35.5l154.2 154.1c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L348.5 303.2C370.9 271.9 384 233.5 384 192 384 86 298 0 192 0S0 86 0 192"})
);

export default LanLollipopSolid;
