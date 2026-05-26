import React from 'react';

export const LanHouseMedical = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M245.6 4.3c6.1-5.7 15.7-5.7 21.8 0l240 224c6.5 6 6.8 16.2.8 22.6s-16.2 6.8-22.6.8L464.5 232v216c0 35.3-28.7 64-64 64h-288c-35.3 0-64-28.7-64-64V232l-21.1 19.7c-6.5 6-16.6 5.7-22.6-.8s-5.7-16.6.8-22.6zm10.9 33.6-176 164.3V448c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32V202.2zm-16 154.1h32c17.7 0 32 14.3 32 32v16h16c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-16v16c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-16h-16c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h16v-16c0-17.7 14.3-32 32-32m32 136v-16c0-4.4 3.6-8 8-8h40v-32h-40c-4.4 0-8-3.6-8-8v-40h-32v40c0 4.4-3.6 8-8 8h-40v32h40c4.4 0 8 3.6 8 8v40h32z"})
);

export default LanHouseMedical;
