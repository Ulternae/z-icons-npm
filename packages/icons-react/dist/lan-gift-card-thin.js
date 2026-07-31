import React from 'react';

export const LanGiftCardThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M359.8 16c-21.3 0-40.9 12.1-50.4 31.1L268.9 128H360c30.9 0 56-25.1 56-56s-25.2-56-56.2-56M243.1 128l-40.5-80.9C193.1 28 173.5 16 152.2 16 121.2 16 96 41.1 96 72s25.1 56 56 56zm-136.3 0C90.4 114.8 80 94.6 80 72c0-39.8 32.4-72 72.2-72 27.3 0 52.5 15.5 64.7 40l39.1 78.1L295.1 40c12.2-24.5 37.4-40 64.8-40 39.7 0 72.2 32.2 72.2 72 0 22.6-10.4 42.8-26.7 56h42.7c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64h42.7zm45.2 16H64c-26.5 0-48 21.5-48 48v112h480V192c0-26.5-21.5-48-48-48H271.7l54.8 75.3c2.6 3.6 1.8 8.6-1.8 11.2s-8.6 1.8-11.2-1.8L256 149.6l-57.5 79.1c-2.6 3.6-7.6 4.4-11.2 1.8s-4.4-7.6-1.8-11.2l54.8-75.3zM16 384h480v-64H16zm0 16v16c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48v-16z"})
);

export default LanGiftCardThin;
