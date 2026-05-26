import React from 'react';

export const LanSidebarFlipSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 448h192V64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64M448 64H304v384h144c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64m-8 64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24zm24 112c0 13.3-10.7 24-24 24h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h64c13.3 0 24 10.7 24 24m-24 64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24z"})
);

export default LanSidebarFlipSolid;
