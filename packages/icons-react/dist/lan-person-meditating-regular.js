import React from 'react';

export const LanPersonMeditatingRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M364.3 394.3c26.8-5.3 51.7 15.1 51.7 42.4 0 23.9-19.4 43.3-43.3 43.3H75.2C51.3 480 32 460.6 32 436.7c0-27.3 25-47.8 51.7-42.4l140.3 28zM224 176c48.2 0 92.7 25.8 116.6 67.7l25.3 44.3H424c13.3 0 24 10.7 24 24s-10.7 24-24 24h-72c-8.6 0-16.6-4.6-20.8-12.1L320 304.4v58l-48 9.6V238.6c-14-9.3-30.6-14.6-48-14.6s-34 5.2-48 14.6V372l-48-9.6v-58l-11.2 19.5c-4.2 7.5-12.2 12.1-20.8 12.1H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h58.1l25.3-44.3C131.3 201.8 175.8 176 224 176m0-48a56 56 0 1 1 0-112 56 56 0 1 1 0 112"})
);

export default LanPersonMeditatingRegular;
