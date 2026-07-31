import React from 'react';

export const LanSword = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 576 553.175',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M171.7 276.7 455-6.6c6-6 14.1-9.4 22.6-9.4h66.7c8.8 0 16 7.2 16 16v66.7c0 8.5-3.4 16.6-9.4 22.6L267.6 372.6l29.7 29.7c11.9 11.9 11.9 31.3 0 43.2-7.5 7.4-18.2 10.5-28.5 8.2l-87.5-20.2-45 45v18.7c0 8.5-3.4 16.6-9.4 22.6l-8 8c-12.5 12.5-32.8 12.5-45.3 0l-57.2-57.2c-12.5-12.5-12.5-32.8 0-45.3l8-8c6-6 14.1-9.4 22.6-9.4h18.7l45-45-20.2-87.5c-2.4-10.3.7-21 8.2-28.5 11.9-11.9 31.3-11.9 43.2 0l29.7 29.7zm22.6 22.6L245 350 528.3 66.7V16h-50.7zM144 364.4c1.2 5.4-.4 11-4.3 14.9l-56 56c-3 3-7.1 4.7-11.3 4.7H47l-8 8 57.4 57.4 8-8V472c0-4.2 1.7-8.3 4.7-11.3l56-56c3.9-3.9 9.5-5.5 14.9-4.3l91.2 21.1-148.3-148.3z"})
);

export default LanSword;
