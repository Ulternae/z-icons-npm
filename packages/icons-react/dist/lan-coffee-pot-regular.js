import React from 'react';

export const LanCoffeePotRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M88 80c-22.1 0-40 17.9-40 40v80c0 13.3-10.7 24-24 24S0 213.3 0 200v-80c0-48.6 39.4-88 88-88h365.6c14.6 0 26.4 11.8 26.4 26.4 0 3.7-.8 7.3-2.3 10.7l-48.4 109c50 34.7 82.7 92.5 82.7 157.9v8c0 55.5-34.6 99.4-55.9 121.2-9.9 10.2-23.9 14.8-38.1 14.8H158c-14.2 0-28.1-4.7-38.1-14.8C98.7 443.5 64 399.5 64 344v-8c0-65.4 32.7-123.2 82.7-157.9L103.1 80zm296.8 80 35.6-80H155.7l35.6 80h193.6zm1.2 48H190c-32.3 16.7-57.5 45.3-69.8 80h335.6c-12.3-34.7-37.4-63.3-69.8-80m78 128H112v8c0 36 23.3 68.2 42 87.4l.2.1c.6.2 1.8.5 3.8.5h260c1.9 0 3.2-.3 3.8-.5l.2-.1c18.7-19.2 42-51.4 42-87.4z"})
);

export default LanCoffeePotRegular;
