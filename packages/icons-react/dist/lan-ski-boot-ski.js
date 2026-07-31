import React from 'react';

export const LanSkiBootSki = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M624 400c8.8 0 16 7.2 16 16v16c0 44.2-35.8 80-80 80H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h544c26.5 0 48-21.5 48-48v-16c0-8.8 7.2-16 16-16M419.6.4c8.6 2 14 10.6 12 19.2l-45.2 195.7 72.5 36.2 5.9 3.3c29.1 17.2 47.2 48.5 47.2 82.6V352c0 35.3-28.7 64-64 64H169.5c-39.9 0-70.1-36.2-63-75.4l46.6-256c5.5-30.4 32-52.6 63-52.6h179.8l4.5-19.6c2-8.6 10.6-14 19.2-12M284.6 64c-25.7 98.3-82.8 138.6-123.4 154.8L138 346.3c-3.6 19.6 11.5 37.7 31.5 37.7H448c17.7 0 32-14.3 32-32v-14.6c0-22.7-12-43.6-31.4-55.1l-4-2.2-80.4-40.2H320c-8.8 0-16-7.2-16-16s7.2-16 16-16h35.3l11.1-48h-30.3c-8.8 0-16-7.2-16-16s7.2-16 16-16h37.7l14.8-64H284.7zm-68.5 0c-15.5 0-28.7 11.1-31.5 26.3L168.3 180c29.2-16.8 63.9-50 83.1-115.9h-35.3z"})
);

export default LanSkiBootSki;
