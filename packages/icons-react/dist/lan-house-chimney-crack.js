import React from 'react';

export const LanHouseChimneyCrack = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M267.4 4.3c-6.1-5.7-15.7-5.7-21.8 0l-240 224c-6.5 6-6.8 16.2-.8 22.6s16.2 6.8 22.6.8L48.5 232v216c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64V232l21.1 19.7c6.5 6 16.6 5.7 22.6-.8s5.7-16.6-.8-22.6l-42.9-40.1V72c0-22.1-17.9-40-40-40h-32c-22.1 0-40 17.9-40 40v11.7zM432.5 72v86.4l-48-44.8V72c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8m0 130.2V448c0 17.7-14.3 32-32 32H281.1l-50.4-75.6 82.7-55.1c4-2.7 6.6-7 7-11.7s-1.2-9.5-4.6-12.9l-96-96c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l82.2 82.2-79.8 53.2c-7.4 4.9-9.3 14.8-4.4 22.2l47.4 71.1H112.5c-17.7 0-32-14.3-32-32V202.2l176-164.3z"})
);

export default LanHouseChimneyCrack;
