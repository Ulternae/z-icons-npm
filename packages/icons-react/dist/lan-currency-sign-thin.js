import React from 'react';

export const LanCurrencySignThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M13.7 34.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L82.7 126C51.2 160.2 32 205.9 32 256s19.2 95.8 50.7 130L2.3 466.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L94 397.3c34.2 31.5 79.8 50.7 130 50.7s95.8-19.2 130-50.7l80.4 80.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L365.3 386c31.5-34.2 50.7-79.8 50.7-130s-19.2-95.8-50.7-130l80.4-80.4c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L354 114.7C319.8 83.2 274.1 64 224 64s-95.8 19.2-130 50.7zM48 256a176 176 0 1 1 352 0 176 176 0 1 1-352 0"})
);

export default LanCurrencySignThin;
