import React from 'react';

export const LanWalkerRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M193.6 48H320c22.1 0 40 17.9 40 40v88H129.5l25.3-98c4.6-17.7 20.5-30 38.7-30zM360 224v164.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64c0-26.9-16.5-49.9-40-59.3V88c0-48.6-39.4-88-88-88H193.6c-40.1 0-75.2 27.1-85.2 66L.8 482c-3.3 12.8 4.4 25.9 17.2 29.2s25.9-4.4 29.2-17.2L117 224h242.9zm24 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanWalkerRegular;
