import React from 'react';

export const LanTruckRampBox = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 32c-35.3 0-64 28.7-64 64v292.1L11.4 480.7C2.9 483.2-1.9 492.1.7 500.6s11.5 13.3 19.9 10.7L338.4 416h62c-.2 2.6-.4 5.3-.4 8 0 48.6 39.4 88 88 88s88-39.4 88-88-39.4-88-88-88c-34.2 0-63.8 19.5-78.4 48H352V96c0-17.7 14.3-32 32-32h192V32zm48 392a56 56 0 1 1 112 0 56 56 0 1 1-112 0M61.2 180.1 153 152c16.9-5.2 34.8 4.3 40 21.2l28.1 91.8c5.2 16.9-4.3 34.8-21.2 40L108 333.1c-16.9 5.2-34.8-4.3-40-21.2L40 220c-5.2-16.9 4.3-34.8 21.2-40zM9.4 229.4l28.1 91.8c10.3 33.8 46.1 52.8 79.9 42.5l91.8-28.1c33.8-10.3 52.8-46.1 42.5-79.9l-28.1-91.8c-10.3-33.8-46.1-52.8-79.9-42.5l-91.8 28.1C18.1 159.8-.9 195.6 9.4 229.4"})
);

export default LanTruckRampBox;
