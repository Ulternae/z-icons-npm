import React from 'react';

export const LanCandleHolderThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 176c35.3 0 64-28.7 64-64 0-14.3-9.4-33.2-23.6-52.5C250.8 40.9 235 24.9 226.7 17c-.5-.5-1.4-1-2.7-1s-2.2.4-2.7 1c-8.3 7.9-24.1 23.9-37.7 42.5C169.4 78.8 160 97.7 160 112c0 35.3 28.7 64 64 64m-80-64c0-39.6 49.1-90.1 66.2-106.6C213.9 1.8 218.9 0 224 0s10.1 1.9 13.8 5.4C254.9 21.8 304 72.4 304 112c0 44.2-35.8 80-80 80s-80-35.8-80-80m0 176v208h160V288c0-17.7-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32m176 0v208h85.7c-13.3-11.7-21.7-28.9-21.7-48 0-35.3 28.7-64 64-64s64 28.7 64 64-28.7 64-64 64H72c-4.4 0-8-3.6-8-8s3.6-8 8-8h56V288c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48m128 208a48 48 0 1 0 0-96 48 48 0 1 0 0 96"})
);

export default LanCandleHolderThin;
