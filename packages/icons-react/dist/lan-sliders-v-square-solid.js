import React from 'react';

export const LanSlidersVSquareSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm144 0c-13.3 0-24 10.7-24 24v40H88c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v184c0 13.3 10.7 24 24 24s24-10.7 24-24V208h32c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32v-40c0-13.3-10.7-24-24-24m184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v184h-32c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h32c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32z"})
);

export default LanSlidersVSquareSolid;
