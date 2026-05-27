import React from 'react';

export const CoreBuildingsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 64C0 28.7 28.7 0 64 0h192c35.3 0 64 28.7 64 64h192c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm320 208v176h192V128H320zm64-80h64v64h-64zm64 128v64h-64v-64zM128 128v64h64v-64zm64 128h-64v64h64z"})
);

export default CoreBuildingsSolid;
