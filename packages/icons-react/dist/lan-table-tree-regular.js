import React from 'react';

export const LanTableTreeRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v48h352V96c0-8.8-7.2-16-16-16zM48 192v224c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V192H160v40c0 4.4 3.6 8 8 8h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16c-2.7 0-5.4-.2-8-.6V328c0 4.4 3.6 8 8 8h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48c-30.9 0-56-25.1-56-56V192zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm256 168c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24m56 72h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
);

export default LanTableTreeRegular;
