import React from 'react';

export const LanObjectIntersectSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 64v96h-64c-35.3 0-64 28.7-64 64v64H64V64zM64 352h96v96c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64h-96V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v224c0 35.3 28.7 64 64 64m384-128v224H224v-96h64c35.3 0 64-28.7 64-64v-64z"})
);

export default LanObjectIntersectSolid;
