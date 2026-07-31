import React from 'react';

export const LanDistributeSpacingHorizontalThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M8 512c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8S0 3.6 0 8v496c0 4.4 3.6 8 8 8m136-368c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32zm-16 224c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48zm304 136c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8s-8 3.6-8 8z"})
);

export default LanDistributeSpacingHorizontalThin;
