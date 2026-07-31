import React from 'react';

export const LanSquareListSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm96 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64m32-144a32 32 0 1 0-64 0 32 32 0 1 0 64 0M96 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64m96-280c-13.3 0-24 10.7-24 24s10.7 24 24 24h160c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 112c-13.3 0-24 10.7-24 24s10.7 24 24 24h160c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 112c-13.3 0-24 10.7-24 24s10.7 24 24 24h160c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanSquareListSolid;
