import React from 'react';

export const LanCruzeiroSignThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M248 48C133.1 48 40 141.1 40 256c0 98.4 68.3 180.8 160 202.4V256c0-4.4 3.6-8 8-8s8 3.6 8 8v34.9c15.7-21.7 41.1-34.9 68.2-34.9H296c4.4 0 8 3.6 8 8s-3.6 8-8 8h-11.8c-24.5 0-47.1 13.1-59.3 34.4-5.9 10.3-9 22-9 33.9v121.3c10.4 1.6 21.1 2.4 32 2.4 55.3 0 105.5-21.6 142.8-56.7 3.2-3 8.3-2.9 11.3.3s2.9 8.3-.3 11.3C361.6 456.8 307.5 480 248 480 124.3 480 24 379.7 24 256S124.3 32 248 32c59.5 0 113.6 23.2 153.7 61.1 3.2 3 3.4 8.1.3 11.3s-8.1 3.4-11.3.3C353.5 69.6 303.3 48 248 48"})
);

export default LanCruzeiroSignThin;
