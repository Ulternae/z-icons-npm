import React from 'react';

export const LanSatelliteDishRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M232 0c-13.3 0-24 10.7-24 24s10.7 24 24 24c128.1 0 232 103.9 232 232 0 13.3 10.7 24 24 24s24-10.7 24-24C512 125.4 386.6 0 232 0M48 256c0-23 3.7-45 10.5-65.6l263 263C301 460.3 279 464 256 464c-114.9 0-208-93.1-208-208m24.8-119.2c-14.1-14.1-37.6-12-46.5 5.8C9.4 176.8-.1 215.2-.1 255.9c0 141.4 114.6 256 256 256 40.7 0 79.2-9.5 113.3-26.4 17.9-8.8 19.9-32.4 5.8-46.5L241 305l40-40c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L207 271zM208 120c0 13.3 10.7 24 24 24 75.1 0 136 60.9 136 136 0 13.3 10.7 24 24 24s24-10.7 24-24c0-101.6-82.4-184-184-184-13.3 0-24 10.7-24 24"})
);

export default LanSatelliteDishRegular;
