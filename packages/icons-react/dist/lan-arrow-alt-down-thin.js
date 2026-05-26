import React from 'react';

export const LanArrowAltDownThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M203.3 459.3c-6.2 6.2-16.4 6.2-22.6 0l-160-160c-4.6-4.6-5.9-11.5-3.5-17.4S25.5 272 32 272h104c4.4 0 8-3.6 8-8V80c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v184c0 4.4 3.6 8 8 8h104c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4zm-33.9 11.3c12.5 12.5 32.8 12.5 45.3 0l160-160c9.2-9.2 11.9-22.9 6.9-34.9S365 255.9 352 255.9h-96v-176c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48v176H32c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.8 7 34.9z"})
);

export default LanArrowAltDownThin;
