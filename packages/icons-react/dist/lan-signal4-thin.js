import React from 'react';

export const LanSignal4Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M336 136c0-4.4-3.6-8-8-8s-8 3.6-8 8v336c0 4.4 3.6 8 8 8s8-3.6 8-8zm-112 88c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8s8-3.6 8-8V232c0-4.4-3.6-8-8-8m-96 104c0-4.4-3.6-8-8-8s-8 3.6-8 8v144c0 4.4 3.6 8 8 8s8-3.6 8-8zM16 392c0-4.4-3.6-8-8-8s-8 3.6-8 8v80c0 4.4 3.6 8 8 8s8-3.6 8-8z"})
);

export default LanSignal4Thin;
