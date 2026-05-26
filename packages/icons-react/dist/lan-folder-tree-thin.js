import React from 'react';

export const LanFolderTreeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8v384c0 22.1 17.9 40 40 40h200v-16H40c-13.3 0-24-10.7-24-24V144h224v-16H16zm288 40c0-17.7 14.3-32 32-32h49.5c6.3 0 12.5 1.9 17.8 5.4l31.9 21.3c5.3 3.5 11.4 5.4 17.8 5.4l75-.1c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H336c-17.7 0-32-14.3-32-32zm-16 0v128c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-75.2c-3.2 0-6.2-.9-8.9-2.7L412.1 8.1C404.2 2.8 394.9 0 385.5 0H336c-26.5 0-48 21.5-48 48m16 288c0-17.7 14.3-32 32-32h49.5c6.3 0 12.5 1.9 17.8 5.4l33.8 22.6c3.9 2.6 8.6 4 13.3 4H528c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H336c-17.7 0-32-14.3-32-32zm-16 0v128c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-77.6c-1.6 0-3.1-.5-4.4-1.3l-33.9-22.6c-7.9-5.3-17.1-8.1-26.6-8.1H336c-26.5 0-48 21.5-48 48"})
);

export default LanFolderTreeThin;
