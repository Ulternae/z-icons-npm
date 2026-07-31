import React from 'react';

export const LanSwordLaserThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -38.935 640 593.635',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m572.9-18.9-321 291.2 52.1 52.1 291.2-321c5.6-6.2 5.4-15.8-.5-21.7s-15.5-6.2-21.7-.5zm34.1 33L315.3 335.7l10.6 10.6c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-2.3-2.3L124.6 543c-15.6 15.6-40.9 15.6-56.6 0l-34.8-34.7c-15.6-15.6-15.6-40.9 0-56.6L220.9 264l-2.3-2.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l10.6 10.6L562.1-30.7c12.5-11.4 31.8-10.9 43.8 1.1s12.4 31.2 1.1 43.7M232.2 275.3 195.5 312l68.7 68.7 36.7-36.7zm-48 48L147.5 360l68.7 68.7 36.7-36.7zM204.9 440l-68.7-68.7L44.5 463c-9.4 9.4-9.4 24.6 0 33.9l34.7 34.7c9.4 9.4 24.6 9.4 33.9 0z"})
);

export default LanSwordLaserThin;
