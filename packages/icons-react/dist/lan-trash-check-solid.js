import React from 'react';

export const LanTrashCheckSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 448 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M394.9 467.1c-1.6 25.3-22.6 44.9-47.9 44.9H101c-25.3 0-46.3-19.6-47.9-44.9L32 144h384zm-80-238.5c-10.7-7.8-25.7-5.4-33.5 5.3l-85.6 117.7-26.5-27.4c-9.2-9.5-24.4-9.8-33.9-.6s-9.8 24.4-.6 33.9l46.4 48c4.9 5.1 11.8 7.8 18.9 7.3s13.6-4.1 17.8-9.8l102.3-140.9c7.8-10.7 5.4-25.7-5.3-33.5M280.9-16c13.8 0 26 8.8 30.3 21.9L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64s14.3-32 32-32h96l8.7-26.1C141.1-7.2 153.3-16 167.1-16H281z"})
);

export default LanTrashCheckSolid;
