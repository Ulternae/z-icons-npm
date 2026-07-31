import React from 'react';

export const LanBookFont = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 64C0 28.7 28.7 0 64 0h336c26.5 0 48 21.5 48 48v320c0 20.9-13.4 38.7-32 45.3V480h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-35.3 0-64-28.7-64-64zm64 352c-17.7 0-32 14.3-32 32s14.3 32 32 32h320v-64zm-32-23.4c9.4-5.4 20.3-8.6 32-8.6h336c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16H64c-17.7 0-32 14.3-32 32zm206.3-287.8 63.9 127.7.3.6 23.8 47.7c4 7.9.7 17.5-7.2 21.5s-17.5.7-21.5-7.2L278 255.9H169.8l-19.6 39.2c-4 7.9-13.6 11.1-21.5 7.2s-11.1-13.6-7.2-21.5l23.8-47.7.3-.6 63.9-127.7c2.7-5.4 8.3-8.8 14.3-8.8s11.6 3.4 14.3 8.8zM262.1 224 224 147.8 185.9 224z"})
);

export default LanBookFont;
