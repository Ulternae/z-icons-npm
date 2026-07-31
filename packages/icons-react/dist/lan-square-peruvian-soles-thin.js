import React from 'react';

export const LanSquarePeruvianSolesThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zm282.3 80.3c4.2 1.3 6.6 5.7 5.3 10l-72 240a7.99 7.99 0 0 1-10 5.3 7.99 7.99 0 0 1-5.3-10l72-240c1.3-4.2 5.7-6.6 10-5.3M216 160c4.4 0 8 3.6 8 8s-3.6 8-8 8h-61.2c-19.2 0-34.8 15.6-34.8 34.8 0 17.3 12.7 32 29.9 34.5l38.4 5.5c25 3.6 43.7 25 43.7 50.3 0 28.1-22.8 50.8-50.8 50.8l-61.2.1c-4.4 0-8-3.6-8-8s3.6-8 8-8h61.2c19.2 0 34.8-15.6 34.8-34.8 0-17.3-12.7-32-29.9-34.5l-38.4-5.5c-25-3.6-43.7-25-43.7-50.3 0-28.1 22.8-50.8 50.8-50.8H216z"})
);

export default LanSquarePeruvianSolesThin;
