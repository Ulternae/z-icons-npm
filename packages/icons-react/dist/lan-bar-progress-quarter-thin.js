import React from 'react';

export const LanBarProgressQuarterThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 112c26.5 0 48 21.5 48 48v192c0 26.5-21.5 48-48 48H160V112zm-384 0h80v68.7l-128 128V160c0-26.5 21.5-48 48-48M16 331.3l128-128V400H64c-26.5 0-48-21.5-48-48zM64 96c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64z"})
);

export default LanBarProgressQuarterThin;
