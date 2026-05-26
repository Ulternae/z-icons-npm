import React from 'react';

export const LanHouseChimneyMedical = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M267.4 4.3c-6.1-5.7-15.7-5.7-21.8 0l-240 224c-6.5 6-6.8 16.2-.8 22.6s16.2 6.8 22.6.8L48.5 232v216c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64V232l21.1 19.7c6.5 6 16.6 5.7 22.6-.8s5.7-16.6-.8-22.6l-42.9-40.1V72c0-22.1-17.9-40-40-40h-32c-22.1 0-40 17.9-40 40v11.7zM432.5 72v86.4l-48-44.8V72c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8m0 130.2V448c0 17.7-14.3 32-32 32h-288c-17.7 0-32-14.3-32-32V202.2l176-164.3zm-192-10.2c-17.7 0-32 14.3-32 32v16h-16c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h16v16c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-16h16c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-16v-16c0-17.7-14.3-32-32-32zm32 136v24h-32v-40c0-4.4-3.6-8-8-8h-40v-32h40c4.4 0 8-3.6 8-8v-40h32v40c0 4.4 3.6 8 8 8h40v32h-40c-4.4 0-8 3.6-8 8z"})
);

export default LanHouseChimneyMedical;
