import React from 'react';

export const LanDiceD10Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '-3.557 -14.55 519.834 546.625',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M232-3.3c12.8-15 36-15 48.8 0l227.9 268.1c11 13 9.9 32.4-2.5 44L278.3 523.3l-2.4 2.1c-11.5 8.9-27.6 8.9-39.1 0l-2.4-2.1L6.5 308.8c-11.6-11-13.3-28.7-4.4-41.5l2-2.5zM16.1 295.6c.4.6.9 1.1 1.4 1.6l227.9 214.5 2.5 1.9c.2.1.3.2.5.2V348.4l-98.1-60.3-134.2 7.4zm248.3 52.9v165.4c1-.6 2.1-1.3 3-2.1l227.9-214.5 1.4-1.6-134.2-7.5-98 60.3zm-102.3-71.9 94.3 58 94.3-58-94.3-261zm-145.8-1.4c-1.2 1.4-2 2.9-2.7 4.5l133-7.4 94.5-261.6zm349.8-2.9 133.1 7.4c-.3-.7-.6-1.3-.9-1.9l-1.8-2.6L271.7 10.7l94.5 261.6z"})
);

export default LanDiceD10Thin;
