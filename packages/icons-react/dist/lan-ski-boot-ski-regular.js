import React from 'react';

export const LanSkiBootSkiRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M616 392c13.3 0 24 10.7 24 24v8c0 48.6-39.4 88-88 88H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h528c22.1 0 40-17.9 40-40v-8c0-13.3 10.7-24 24-24M384.4 19.5c2.5-13 15.1-21.5 28.1-19s21.5 15.1 19 28.1L395 218.2l56.9 26.6 6.7 3.4c32.7 18.3 53.3 52.9 53.3 90.8v5.1c0 39.8-32.2 72-72 72H179.3c-45.8 0-80-42.3-70.4-87.1l51.4-240 1.6-6.1c9.2-30 37-50.8 68.8-50.8h151.2l2.4-12.5zM298.8 80C272.5 181.8 217 224 177 240.9l-21 98c-3.2 14.9 8.2 29 23.5 29l260.5.1c13.3 0 24-10.7 24-24v-5.1c0-20.4-11.1-39-28.7-48.9l-3.6-1.9-69.3-32.3c-.8.1-1.6.1-2.4.1h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24h36.2l9.2-48H328c-13.3 0-24-10.7-24-24s10.7-24 24-24h38.7l6.2-32h-74.1zm-67.9 0c-11.3 0-21.1 7.9-23.5 19l-19.3 89.9c24.6-18 52.2-50.4 69.3-108.9z"})
);

export default LanSkiBootSkiRegular;
