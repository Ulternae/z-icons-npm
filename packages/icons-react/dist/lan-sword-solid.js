import React from 'react';

export const LanSwordSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -15.9 576 546.675',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M454.9-6.6 202.2 246.1l96 96L550.9 89.4c6-6 9.4-14.1 9.4-22.6V.1c0-8.8-7.2-16-16-16h-66.7c-8.5 0-16.6 3.4-22.6 9.4zM45.5 416c-8.5 0-16.6 3.4-22.6 9.4-12.5 12.5-12.5 32.8 0 45.3l50.7 50.7c12.5 12.5 32.8 12.5 45.3 0 6-6 9.4-14.1 9.4-22.6v-34.7l48-48 95.2 40.8c10.1 4.3 21.9 2.1 29.7-5.7 10.5-10.5 10.5-27.6 0-38.2L131.3 243.1c-10.5-10.5-27.6-10.5-38.2 0-7.8 7.8-10.1 19.6-5.7 29.7l40.8 95.2-48 48z"})
);

export default LanSwordSolid;
