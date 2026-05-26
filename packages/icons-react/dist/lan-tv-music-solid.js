import React from 'react';

export const LanTvMusicSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 96v240H64V96zM64 32C28.7 32 0 60.7 0 96v240c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm64 448c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32H160c-17.7 0-32 14.3-32 32m224-352h-40c-13.3 0-24 10.7-24 24v41.8c-5.1-1.2-10.5-1.8-16-1.8-35.3 0-64 25.1-64 56s28.7 56 64 56 64-25.1 64-56v-72h16c13.3 0 24-10.7 24-24s-10.7-24-24-24"})
);

export default LanTvMusicSolid;
