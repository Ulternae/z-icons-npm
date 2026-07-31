import React from 'react';

export const LanFaucet = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M240 48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h128v48h-18.7c-12.7 0-24.9 5.1-33.9 14.1l-34 33.9H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h112c4.2 0 8.3-1.7 11.3-4.7l38.6-38.6c3-3 7.1-4.7 11.3-4.7h69.5c4.2 0 8.3 1.7 11.3 4.7l38.6 38.6c3 3 7.1 4.7 11.3 4.7h48c61.9 0 112 50.1 112 112 0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16 0-26.5-21.5-48-48-48h-60.8c-5.7 0-11 3-13.8 8-13.9 24-39.7 40-69.3 40s-55.5-16.1-69.3-40c-2.9-4.9-8.1-8-13.8-8H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h116.1c20.2 29 53.8 48 91.9 48s71.7-19 91.9-48H368c8.8 0 16 7.2 16 16 0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48 0-79.5-64.5-144-144-144h-41.4l-33.9-33.9c-9-9-21.2-14.1-33.9-14.1h-18.7v-48h128c8.8 0 16-7.2 16-16s-7.2-16-16-16h-128V48z"})
);

export default LanFaucet;
