import React from 'react';

export const LanLayer = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M498.1 314.2c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101-5.7 2.2c-13.5 4.5-28.3 3.8-41.3-2.2L13.9 357.7C5.4 353.8 0 345.3 0 336c0-9.4 5.5-17.9 13.9-21.8l68.7-31.8 38.1 17.6-77.8 35.9 202.9 93.8c6.4 2.9 13.7 2.9 20.1 0l202.8-93.8L391 300l38.1-17.6 68.8 31.8zM232.5 53.1c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101-5.7 2.2c-13.5 4.5-28.3 3.8-41.3-2.2l-218.6-101C5.4 193.8 0 185.3 0 176c0-9.4 5.5-17.9 13.9-21.8l218.6-101zm33.6 29.1c-6.4-2.9-13.7-2.9-20.1 0L43.1 176l202.8 93.7c6.4 2.9 13.7 2.9 20.1 0L468.9 176z"})
);

export default LanLayer;
