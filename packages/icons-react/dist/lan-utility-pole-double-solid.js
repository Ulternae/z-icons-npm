import React from 'react';

export const LanUtilityPoleDoubleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 0c17.7 0 32 14.3 32 32v32h96v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8h32v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v40c0 17.7-14.3 32-32 32h-36.7L288 231.5V256h96v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8h32v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v40c0 17.7-14.3 32-32 32h-36.7L288 423.5V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-56.5L68.7 320H32c-17.7 0-32-14.3-32-32v-40c0-13.3 10.7-24 24-24s24 10.7 24 24v8h32v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8h96v-24.5L68.7 128H32c-17.7 0-32-14.3-32-32V56c0-13.3 10.7-24 24-24s24 10.7 24 24v8h32v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8h96V32c0-17.7 14.3-32 32-32M155.3 128l68.7 45.8V128zM288 173.8l68.7-45.8H288zM155.3 320l68.7 45.8V320zM288 365.8l68.7-45.8H288z"})
);

export default LanUtilityPoleDoubleSolid;
