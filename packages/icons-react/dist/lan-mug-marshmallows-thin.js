import React from 'react';

export const LanMugMarshmallowsThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M296 16c-17.7 0-32 14.3-32 32v32h-16c0-17.7-14.3-32-32-32h-72c-17.7 0-32 14.3-32 32H96c0-26.5 21.5-48 48-48h72c12.4 0 23.6 4.7 32.1 12.3C250 19.5 270.7 0 296 0h72c26.5 0 48 21.5 48 48v32h-16V48c0-17.7-14.3-32-32-32zM96 144c-8.8 0-16 7.2-16 16v224c0 44.2 35.8 80 80 80h192c44.2 0 80-35.8 80-80V144H176v136c0 4.4-3.6 8-8 8s-8-3.6-8-8V144zm352 0v176h24c48.6 0 88-39.4 88-88s-39.4-88-88-88zm0 192v48c0 53-43 96-96 96H160c-53 0-96-43-96-96V160c0-17.7 14.3-32 32-32h376c57.4 0 104 46.6 104 104s-46.6 104-104 104z"})
);

export default LanMugMarshmallowsThin;
