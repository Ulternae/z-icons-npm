import React from 'react';

export const LanFaceMelting = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M208.6 295.6c-3.8-8-13.4-11.4-21.3-7.5s-11.4 13.4-7.5 21.3c19.4 40.7 56 73.1 103 85.7s94.8 2.9 132-22.7c7.3-5 9.1-15 4.1-22.2s-15-9.1-22.2-4.1c-29.8 20.5-68 28.2-105.6 18.2s-66.8-35.9-82.4-68.6zM232 192a24 24 0 1 1 48 0 24 24 0 1 1-48 0m184 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48m150.1 78.8c-7.6 26.6 10.3 57.2 38 57.2h20c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-41.3 0-41.3 64 0 64 8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h25.4c41.3 0 67.7-73 49.3-110C73.6 335.7 64 297 64 256 64 114.6 178.6 0 320 0s256 114.6 256 256c0 24.6-3.5 48.3-9.9 70.8M544 256c0-123.7-100.3-224-224-224S96 132.3 96 256c0 35.9 8.4 69.8 23.4 99.8 19.4 38.9 8.1 90.8-18 124.2h403.2c-21.2-36.6.2-85.8 42.2-94.6-13.1-18.8-18.2-43.6-11.4-67.4 5.6-19.6 8.7-40.4 8.7-62z"})
);

export default LanFaceMelting;
