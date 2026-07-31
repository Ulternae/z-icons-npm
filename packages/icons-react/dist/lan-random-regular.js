import React from 'react';

export const LanRandomRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m425 31 80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H356c-15.1 0-29.3 7.1-38.4 19.2L284 216l-30-40 25.2-33.6c18.1-24.2 46.6-38.4 76.8-38.4h74.1l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0zM194 336l-25.2 33.6C150.7 393.8 122.2 408 92 408H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h68c15.1 0 29.3-7.1 38.4-19.2L164 296zm197-49c9.4-9.4 24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39h-74.1c-30.2 0-58.7-14.2-76.8-38.4L130.4 171.2C121.3 159.1 107.1 152 92 152H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h68c30.2 0 58.7 14.2 76.8 38.4l148.8 198.4c9.1 12.1 23.3 19.2 38.4 19.2h74.1l-39-39c-9.4-9.4-9.4-24.6 0-33.9z"})
);

export default LanRandomRegular;
