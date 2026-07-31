import React from 'react';

export const LanArrowsCrossSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M54.6 41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l135.5 135.4 45.3-45.3zm203.3 293.8 80.8 80.8H288c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v50.7l-80.8-80.8zM288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L9.4 425.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32z"})
);

export default LanArrowsCrossSolid;
