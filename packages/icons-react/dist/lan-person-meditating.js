import React from 'react';

export const LanPersonMeditating = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M364 388.7c27.5-3.7 52 17.7 52 45.4 0 25.3-20.5 45.8-45.8 45.8l-292.4.1C52.5 480 32 459.5 32 434.2c0-27.8 24.5-49.2 52-45.4l140.1 19 139.9-19zM79.7 420.4c-8.3-1.1-15.7 5.3-15.7 13.7 0 7.6 6.2 13.8 13.8 13.8h114.4c-.2-1.4-.3-2.8-.3-4.3 0-2.7.3-5.4.9-8zm288.6 0-140.6 19c-2.1.3-3.7 2.1-3.7 4.2 0 2.4 1.9 4.3 4.3 4.3h141.9c7.6 0 13.8-6.2 13.8-13.8 0-8.4-7.4-14.8-15.7-13.7M224 176c45.3 0 86.7 25.6 106.9 66.1l30.9 61.9h70.1c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80c-6.1 0-11.6-3.4-14.3-8.8l-33.7-67.4v104.8l-32 4.3V222.4c-14-9.2-30.6-14.4-48-14.4s-34 5.2-48 14.4v146.5l-32-4.3V259.8l-33.7 67.4c-2.7 5.4-8.3 8.8-14.3 8.8h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16H86l30.9-61.9C137.3 201.6 178.7 176 224 176m0-48a56 56 0 1 1 0-112 56 56 0 1 1 0 112m0-80a24 24 0 1 0 0 48 24 24 0 1 0 0-48"})
);

export default LanPersonMeditating;
