import React from 'react';

export const LanMattressPillowSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h192zm48 384h208c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H304zM64 160c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z"})
);

export default LanMattressPillowSolid;
