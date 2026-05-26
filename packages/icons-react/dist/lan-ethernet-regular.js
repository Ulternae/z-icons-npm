import React from 'react';

export const LanEthernetRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 96c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v32h32c17.7 0 32 14.3 32 32v32h32c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32h32v-32c0-17.7 14.3-32 32-32h32zm48 16v40c0 13.3-10.7 24-24 24h-40v40c0 13.3-10.7 24-24 24H48v160h40v-56c0-13.3 10.7-24 24-24s24 10.7 24 24v56h48v-56c0-13.3 10.7-24 24-24s24 10.7 24 24v56h48v-56c0-13.3 10.7-24 24-24s24 10.7 24 24v56h48v-56c0-13.3 10.7-24 24-24s24 10.7 24 24v56h40V240h-40c-13.3 0-24-10.7-24-24v-40h-40c-13.3 0-24-10.7-24-24v-40z"})
);

export default LanEthernetRegular;
