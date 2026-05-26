import React from 'react';

export const LanSwordLaserAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M331 272h-53.1L579.6-3.5zm59.1 6.2L618.7 24.8C635.7 6 635-23 617-40.9c-18-18.1-47.1-18.7-65.9-1.5L206.7 272h-1.4c-8.5 0-16.6 3.4-22.6 9.4L33.9 430.1c-18.7 18.7-18.7 49.1 0 67.9L78 542.1c18.7 18.7 49.1 18.7 67.9 0L368 320l20.7-20.7c6.2-6.2 5.9-15.2 1.4-21.1M67.9 464l69.1-69.1 44.1 44.1-69.1 69.1zm232.2-144L215 405.1 170.9 361l41-41z"})
);

export default LanSwordLaserAltRegular;
