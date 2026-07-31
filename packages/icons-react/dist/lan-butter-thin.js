import React from 'react';

export const LanButterThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M416 80h64c26.5 0 48 21.5 48 48v144h16V128c0-35.3-28.7-64-64-64H96c-35.3 0-64 28.7-64 64v144h16V128c0-26.5 21.5-48 48-48h304v192h16zM8 320c-4.4 0-8 3.6-8 8s3.6 8 8 8h24v80c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-80h24c4.4 0 8-3.6 8-8s-3.6-8-8-8zm520 16v80c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16v-80z"})
);

export default LanButterThin;
