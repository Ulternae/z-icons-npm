import React from 'react';

export const NeoSignalBarsFairSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 616 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 224c-30.9 0-56 25.1-56 56v196c0 15.5 12.5 28 28 28h28c30.9 0 56-25.1 56-56V280c0-30.9-25.1-56-56-56M56 308c-30.9 0-56 25.1-56 56v84c0 30.9 25.1 56 56 56h28c15.5 0 28-12.5 28-28V336c0-15.5-12.5-28-28-28z"})
);

export default NeoSignalBarsFairSolid;
