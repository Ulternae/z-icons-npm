import React from 'react';

export const LanTrashCanCheckRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 448 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 448c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V144h48v304c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V144h48zm180.7-224.1c7.8-10.7 22.8-13.1 33.5-5.3s13.1 22.8 5.3 33.5l-76.1 104.7c-4.2 5.7-10.7 9.3-17.8 9.8s-14-2.2-18.9-7.3l-35.9-37.2c-9.2-9.5-8.9-24.7.6-33.9s24.7-9 33.9.6l16.1 16.6 59.3-81.6zM281.8-16c13.3 0 25.3 8.3 30 20.8L328 48h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 96 0 85.3 0 72s10.7-24 24-24h96l16.2-43.2c4.7-12.5 16.6-20.8 30-20.8z"})
);

export default LanTrashCanCheckRegular;
