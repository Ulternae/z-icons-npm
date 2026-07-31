import React from 'react';

export const LanSquare3Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm244 136c11 0 20-9 20-20s-9-20-20-20h-76c-13.3 0-24-10.7-24-24s10.7-24 24-24h76c37.6 0 68 30.4 68 68 0 16.8-6.1 32.1-16.2 44 10.1 11.9 16.2 27.2 16.2 44 0 37.6-30.4 68-68 68h-76c-13.3 0-24-10.7-24-24s10.7-24 24-24h76c11 0 20-9 20-20s-9-20-20-20h-52c-13.3 0-24-10.7-24-24s10.7-24 24-24z"})
);

export default LanSquare3Regular;
