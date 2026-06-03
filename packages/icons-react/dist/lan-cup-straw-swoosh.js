import React from 'react';

export const LanCupStrawSwoosh = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 384 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M186.2 19.6c5.6-21 24.6-35.6 46.4-35.6H272c8.8 0 16 7.2 16 16s-7.2 16-16 16h-39.4c-7.3 0-13.6 4.9-15.5 11.9L199 96h169c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16l-28.3 340c-2.1 24.9-22.9 44-47.8 44H108.2c-25 0-45.8-19.1-47.8-44L32 128H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h149.8zM319.9 128H64.1l17.1 205.4c30.5-3.6 50.5-10.7 64.9-18.9 17.1-9.8 27.6-22 39.1-36.1l2-2.5c10.8-13.4 23.2-28.6 42.5-41 19.8-12.6 45.7-21.6 83.3-25.2l6.8-81.7zm-9.5 114.1c-30.6 3.5-49.8 10.9-63.4 19.7-14.8 9.5-24.2 21.1-35.5 35l-1.4 1.7c-11.8 14.5-25.4 30.7-48 43.7-19.2 11-43.9 19.1-78.2 23.1l8.3 100c.7 8.3 7.6 14.7 15.9 14.7h167.7c8.3 0 15.3-6.4 15.9-14.7l18.6-223.2z"})
);

export default LanCupStrawSwoosh;
