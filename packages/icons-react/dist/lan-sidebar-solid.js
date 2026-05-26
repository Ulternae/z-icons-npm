import React from 'react';

export const LanSidebarSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 448H256V64h192c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64M64 64h144v384H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64m8 64c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24zM48 240c0 13.3 10.7 24 24 24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H72c-13.3 0-24 10.7-24 24m24 64c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanSidebarSolid;
