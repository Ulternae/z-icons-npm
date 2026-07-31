import React from 'react';

export const LanCakeSlice = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M296 64 52.3 256H480c0-128-112-192-184-192M0 272c0-9.8 4.5-19.1 12.2-25.1l264-208c5.6-4.4 12.6-6.9 19.8-6.9 44.3 0 97.6 19.2 139.9 55.8C479.1 125.2 512 181.7 512 256v160c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm32 80h448v-64H32zm0 32v32c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-32z"})
);

export default LanCakeSlice;
