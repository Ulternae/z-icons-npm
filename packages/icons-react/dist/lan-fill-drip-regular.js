import React from 'react';

export const LanFillDripRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m194.3 96.4 70.1-70.1C281.3 9.5 304.1 0 328 0s46.7 9.5 63.6 26.3l126.1 126.1c16.8 16.9 26.3 39.7 26.3 63.6s-9.5 46.7-26.3 63.6L311.6 485.7C294.7 502.5 271.9 512 248 512s-46.7-9.5-63.6-26.3L58.3 359.6C41.5 342.7 32 319.9 32 296s9.5-46.7 26.3-63.6l102.1-102.1L103 73c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l57.4 57.4zm0 67.9-102 102c-6 6-9.9 13.5-11.5 21.7h360.6l42.3-42.3c7.9-7.9 12.3-18.5 12.3-29.7s-4.4-21.8-12.3-29.7l-126-126C349.8 52.4 339.1 48 328 48s-21.8 4.4-29.7 12.3l-70 70L281 183c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-52.7-52.7zM102.6 336l115.7 115.7c7.9 7.9 18.5 12.3 29.7 12.3s21.8-4.4 29.7-12.3L393.4 336zM512 544c-35.3 0-64-28.7-64-64 0-25.2 32.6-79.6 51.2-108.7 6-9.4 19.5-9.4 25.5 0 18.7 29.1 51.2 83.5 51.2 108.7 0 35.3-28.7 64-64 64z"})
);

export default LanFillDripRegular;
