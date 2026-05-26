import React from 'react';

export const LanHexagonVerticalNftSlanted = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M276.9 483.3 445 387.1c12.4-7.1 20.1-20.4 20.1-34.7V160.8c0-14.3-7.7-27.6-20.1-34.7L276.9 29.9c-12.3-7-27.4-7-39.7 0L69.1 126C56.6 133.2 49 146.4 49 160.8v191.6c0 14.3 7.7 27.6 20.1 34.7l168.1 96.2c12.3 7 27.4 7 39.7 0m15.9 27.8c-22.2 12.7-49.4 12.7-71.5 0L53.2 414.9C30.8 402.1 17 378.2 17 352.4V160.8c0-25.8 13.8-49.7 36.2-62.5l168-96.2c22.2-12.7 49.4-12.7 71.5 0l168.1 96.2c22.4 12.8 36.2 36.7 36.2 62.5v191.6c0 25.8-13.8 49.7-36.2 62.5zM126.3 184.8l33.7 67.4V192c0-8.8 7.2-16 16-16s16 7.2 16 16v128c0 7.4-5.1 13.9-12.3 15.6s-14.7-1.8-18-8.4L128 259.8V320c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-7.4 5.1-13.9 12.3-15.6s14.7 1.8 18 8.4M224 192c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16zm112-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V208h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
);

export default LanHexagonVerticalNftSlanted;
