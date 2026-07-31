import React from 'react';

export const LanHoodCloakRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M144 464V304c0-61.9 50.1-112 112-112s112 50.1 112 112v160h90.3l-17-34c-16.6-33.3-25.3-70.1-25.3-107.3v-69.2c0-40.8-17.3-79.7-47.7-107l-10.2-9.2c-23.8-21.5-24.8-58.5-2.1-81.2l8.1-8.1H272c-97.2 0-176 78.8-176 176v98.7c0 37.3-8.7 74-25.3 107.3l-17 34zm48 0h128V304c0-35.3-28.7-64-64-64s-64 28.7-64 64zm-48 48H38.8C17.4 512 0 494.6 0 473.2c0-6 1.4-12 4.1-17.4l23.6-47.3c13.4-26.6 20.3-56 20.3-85.8V224C48 100.3 148.3 0 272 0h153.4C437.9 0 448 10.1 448 22.6c0 6-2.4 11.8-6.6 16L390 90c-3.2 3.2-3.1 8.5.3 11.6l10.2 9.2c40.5 36.4 63.6 88.3 63.6 142.7v69.2c0 29.8 6.9 59.2 20.3 85.9l23.6 47.3c2.7 5.4 4.1 11.3 4.1 17.4 0 21.4-17.4 38.8-38.8 38.8z"})
);

export default LanHoodCloakRegular;
