import React from 'react';

export const LanSquareGuarani = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm208 24c0-8.8 7.2-16 16-16s16 7.2 16 16v17.1c26.3 3.5 50 15.6 68 33.2 6.3 6.2 6.4 16.3.2 22.6s-16.3 6.4-22.6.2c-12.3-12-28-20.5-45.6-23.7V240h88c8.8 0 16 7.2 16 16 0 60.8-45.3 111.1-104 118.9V392c0 8.8-7.2 16-16 16s-16-7.2-16-16v-17.1c-58.7-7.8-104-58.1-104-118.9s45.3-111.1 104-118.9zm-72 136c0 43.1 31 79 72 86.6V169.5c-41 7.5-72 43.4-72 86.5m174.5 16h-70.6v70.6c35.8-6.6 64-34.8 70.6-70.6"})
);

export default LanSquareGuarani;
