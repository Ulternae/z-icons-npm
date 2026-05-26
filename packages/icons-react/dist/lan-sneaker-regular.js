import React from 'react';

export const LanSneakerRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M417 257c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l9.1-9.1-37.2-22.9-33.9 33.9c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l25.8-25.8-72.9-44.8v26.3c0 60.4-48.9 109.3-109.3 109.3-32.1 0-62.1-14-82.7-37.8v85.8h534.3c-13.2-27.2-39-47.5-70.6-52.7l-71.7-11.9-4.7-.8-18.4 18.4zM48 352v32c0 8.8 7.2 16 16 16h512c8.8 0 16-7.2 16-16v-32zM0 384V158.6C0 141.7 13.7 128 30.6 128c10.8 0 20.7 5.6 26.3 14.9l21.2 35.4c11.1 18.5 31 29.8 52.6 29.8 33.9 0 61.3-27.4 61.3-61.3v-45.3c0-20.7 16.7-37.4 37.4-37.4 6.9 0 13.7 1.9 19.6 5.5L448 192l71.7 11.9C589.1 215.5 640 275.6 640 346v38c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64"})
);

export default LanSneakerRegular;
