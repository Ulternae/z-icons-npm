import React from 'react';

export const NeoSignalBarsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 616 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M560 56c-30.9 0-56 25.1-56 56v364c0 15.5 12.5 28 28 28h28c30.9 0 56-25.1 56-56V112c0-30.9-25.1-56-56-56M336 196c0-30.9 25.1-56 56-56h28c15.5 0 28 12.5 28 28v308c0 15.5-12.5 28-28 28h-56c-15.5 0-28-12.5-28-28zm-112 28c-30.9 0-56 25.1-56 56v196c0 15.5 12.5 28 28 28h56c15.5 0 28-12.5 28-28V252c0-15.5-12.5-28-28-28zM56 308c-30.9 0-56 25.1-56 56v84c0 30.9 25.1 56 56 56h28c15.5 0 28-12.5 28-28V336c0-15.5-12.5-28-28-28z"})
);

export default NeoSignalBarsSolid;
