import React from 'react';

export const LanShovelSnowRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M497.1-17c-9.4-9.4-24.6-9.4-33.9 0L419 27.1c-17.2 17.2-26.9 40.6-26.9 65 0 16.7 4.4 32.3 12.2 45.8L287.2 255l-58.4-58.3c-19.8-19.8-52.2-18.5-70.4 2.7L29.1 350.3c-16.3 19-15.2 47.4 2.5 65.2l129.1 129.1c17.7 17.7 46.1 18.8 65.2 2.5l150.9-129.4c21.2-18.2 22.5-50.6 2.7-70.4L321.1 289l117.2-117.2c13.5 7.8 29.1 12.2 45.8 12.2 24.4 0 47.7-9.7 65-26.9l44-44.1c9.4-9.4 9.4-24.6 0-33.9l-96-96zM453 61.1l27.1-27.2L542.2 96 515 123.1c-8.2 8.2-19.4 12.9-31 12.9-24.2 0-43.9-19.6-43.9-43.9 0-11.6 4.6-22.8 12.9-31M194.8 230.6l150.7 150.7-150.9 129.3L65.5 381.5zm22.3 98.4c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-64 64c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0zm64 64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-64 64c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0z"})
);

export default LanShovelSnowRegular;
