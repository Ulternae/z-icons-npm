import React from 'react';

export const LanMoneyCheckAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 112c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16zM0 128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm296 144h96c13.3 0 24 10.7 24 24s-10.7 24-24 24h-96c-13.3 0-24-10.7-24-24s10.7-24 24-24m-24-56c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24s-10.7 24-24 24h-96c-13.3 0-24-10.7-24-24m-108-64c11 0 20 9 20 20v4h8c11 0 20 9 20 20s-9 20-20 20h-43.4c-4.7 0-8.6 3.8-8.6 8.6 0 4.1 2.9 7.6 6.9 8.4l34.1 6.8c22.7 4.5 39 24.5 39 47.6 0 22.5-15.3 41.4-36 46.9v5.6c0 11-9 20-20 20s-20-9-20-20v-4h-16c-11 0-20-9-20-20s9-20 20-20h43.4c4.7 0 8.6-3.8 8.6-8.6 0-4.1-2.9-7.6-6.9-8.4l-34.1-6.7c-22.7-4.5-39-24.5-39-47.6 0-25.3 19.3-46.1 44-48.4V172c0-11 9-20 20-20"})
);

export default LanMoneyCheckAltRegular;
