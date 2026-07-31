import React from 'react';

export const LanFilmsRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M512 80c8.8 0 16 7.2 16 16v40h-48V80zm-272 0h192v256H240zm272 256h-32v-56h48v40c0 8.8-7.2 16-16 16m16-152v48h-48v-48zm-336 96v56h-32c-8.8 0-16-7.2-16-16v-40zm0-48h-48v-48h48zm0-96h-48V96c0-8.8 7.2-16 16-16h32zM160 32c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zM48 152c0-13.3-10.7-24-24-24S0 138.7 0 152v264c0 35.3 28.7 64 64 64h392c13.3 0 24-10.7 24-24s-10.7-24-24-24H64c-8.8 0-16-7.2-16-16z"})
);

export default LanFilmsRegular;
