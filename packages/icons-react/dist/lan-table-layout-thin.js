import React from 'react';

export const LanTableLayoutThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 96c0-26.5 21.5-48 48-48h320c26.5 0 48 21.5 48 48v64H16zm0 320V176h96v288H64c-26.5 0-48-21.5-48-48m112 48V176h304v240c0 26.5-21.5 48-48 48zM0 416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96z"})
);

export default LanTableLayoutThin;
