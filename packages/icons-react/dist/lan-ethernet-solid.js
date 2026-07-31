import React from 'react';

export const LanEthernetSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 224v192c0 17.7 14.3 32 32 32h32V344c0-13.3 10.7-24 24-24s24 10.7 24 24v104h64V344c0-13.3 10.7-24 24-24s24 10.7 24 24v104h64V344c0-13.3 10.7-24 24-24s24 10.7 24 24v104h64V344c0-13.3 10.7-24 24-24s24 10.7 24 24v104h32c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32h-32v-32c0-17.7-14.3-32-32-32h-32V96c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32v32H96c-17.7 0-32 14.3-32 32v32H32c-17.7 0-32 14.3-32 32"})
);

export default LanEthernetSolid;
