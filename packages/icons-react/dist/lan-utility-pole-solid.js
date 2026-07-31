import React from 'react';

export const LanUtilityPoleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 0c17.7 0 32 14.3 32 32v32h96v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8h32v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v40c0 17.7-14.3 32-32 32h-32.9L288 260.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V260.6L64.9 128H32c-17.7 0-32-14.3-32-32V56c0-13.3 10.7-24 24-24s24 10.7 24 24v8h32v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8h96V32c0-17.7 14.3-32 32-32M139.9 128l84.1 70.1V128zM288 198.1l84.1-70.1H288z"})
);

export default LanUtilityPoleSolid;
