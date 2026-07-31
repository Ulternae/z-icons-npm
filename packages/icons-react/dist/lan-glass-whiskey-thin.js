import React from 'react';

export const LanGlassWhiskeyThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 72c0-13.3 10.7-24 24-24h368c13.3 0 24 10.7 24 24v152H16zm0 168h416v120c0 57.4-46.6 104-104 104H120c-57.4 0-104-46.6-104-104zM40 32C17.9 32 0 49.9 0 72v288c0 66.3 53.7 120 120 120h208c66.3 0 120-53.7 120-120V72c0-22.1-17.9-40-40-40z"})
);

export default LanGlassWhiskeyThin;
