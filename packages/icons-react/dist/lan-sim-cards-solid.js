import React from 'react';

export const LanSimCardsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 384c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V106.5c0-17-6.7-33.3-18.7-45.3l-74.6-74.5c-12-12-28.3-18.7-45.3-18.7H160c-35.3 0-64 28.7-64 64zM24 160c-13.3 0-24 10.7-24 24v296c0 35.3 28.7 64 64 64h264c13.3 0 24-10.7 24-24s-10.7-24-24-24H64c-8.8 0-16-7.2-16-16V184c0-13.3-10.7-24-24-24m168 64h80v56H160v-24c0-17.7 14.3-32 32-32m-32 128v-24h64v56h-32c-17.7 0-32-14.3-32-32m192 32h-80v-56h112v24c0 17.7-14.3 32-32 32m32-128v24h-64v-56h32c17.7 0 32 14.3 32 32"})
);

export default LanSimCardsSolid;
