import React from 'react';

export const LanTableSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64l-6.5-.3C25.2 476.4 0 449.1 0 416V96c0-35.3 28.7-64 64-64zM64 320v96h128v-96zm192 0v96h128v-96zM64 256h128v-96H64zm192 0h128v-96H256z"})
);

export default LanTableSolid;
