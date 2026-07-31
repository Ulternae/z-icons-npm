import React from 'react';

export const LanGarageSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 480V142.1c0-27.5 17.6-52 43.8-60.7l229-76.3c9.9-3.3 20.5-3.3 30.4 0l229 76.3c26.1 8.7 43.8 33.2 43.8 60.7V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v256c0 17.7-14.3 32-32 32S0 497.7 0 480m464-240v80H112v-80zM112 368h352v144H112zm240 48H224v48h128z"})
);

export default LanGarageSolid;
