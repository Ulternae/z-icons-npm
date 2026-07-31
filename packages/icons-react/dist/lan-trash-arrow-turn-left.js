import React from 'react';

export const LanTrashArrowTurnLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 448 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M160.5 27.4c2-6.8 8.3-11.4 15.3-11.4h96.4c7.1 0 13.3 4.6 15.3 11.4l11 36.6h-149zM116.1 64H16C7.2 64 0 71.2 0 80s7.2 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16H331.9l-13.7-45.8c-6.1-20.3-24.8-34.2-46-34.2h-96.4c-21.2 0-39.9 13.9-46 34.2zm-87.4 80 22.9 308.7c2.5 33.4 30.3 59.3 63.8 59.3h217.1c33.5 0 61.3-25.9 63.8-59.3L419.2 144h-32.1l-22.7 306.4c-1.2 16.7-15.2 29.6-31.9 29.6H115.4c-16.8 0-30.7-12.9-31.9-29.6L60.8 144zm182.6 44.7c-6.2-6.2-16.4-6.2-22.6 0l-72 72c-6.2 6.2-6.2 16.4 0 22.6l72 72c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L166.6 288H240c26.5 0 48 21.5 48 48v40c0 8.8 7.2 16 16 16s16-7.2 16-16v-40c0-44.2-35.8-80-80-80h-73.4l44.7-44.7c6.2-6.2 6.2-16.4 0-22.6"})
);

export default LanTrashArrowTurnLeft;
