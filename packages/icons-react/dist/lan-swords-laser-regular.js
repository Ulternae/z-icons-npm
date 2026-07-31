import React from 'react';

export const LanSwordsLaserRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -54.977 640 611.102',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m406.2 187.6 35.4 32.4 177-195.1C635.7 6 635-23 617-41s-47-18.7-65.9-1.6L351.9 138.1l35.6 32.5L579.7-3.7zM280.9 391.1l-60.7-60.7c-11.4-11.4-16.8-25.3-17.5-38.9l-6.7-7.4-162 162c-18.7 18.7-18.7 49.1 0 67.9l28.1 28.1c18.7 18.7 49.1 18.7 67.9 0zm-57-10.9-19.7 19.7-28.1-28.1 19.7-19.7zm-48 48L96 508.1 67.9 480l79.9-79.9zM60.4-3.5 362.1 272H309zM21.3 24.8 250 278.2c-4.5 5.9-4.9 14.9 1.4 21.1l19.6 19.6 1 1L494.1 542c18.7 18.7 49.1 18.7 67.9 0l44.1-44.1c18.7-18.7 18.7-49.1 0-67.9L457.4 281.4c-6-6-14.1-9.4-22.6-9.4h-1.4L89-42.4C70.1-59.6 41-59 23-40.9 5-23 4.3 6 21.3 24.8M528 508.1 458.9 439l44.1-44.1 69.1 69.1zm-103-103L339.9 320h88.2l41 41z"})
);

export default LanSwordsLaserRegular;
