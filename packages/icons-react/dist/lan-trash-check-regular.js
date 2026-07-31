import React from 'react';

export const LanTrashCheckRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 448 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M99.5 449.2c.6 8.4 7.6 14.8 16 14.8h217.1c8.4 0 15.3-6.5 16-14.8L371.2 144h48.1l-22.9 308.7c-2.5 33.4-30.3 59.3-63.8 59.3H115.5c-33.5 0-61.4-25.9-63.8-59.3L28.8 144h48.1zm161.2-225.3c7.8-10.7 22.8-13.1 33.5-5.3s13.1 22.8 5.3 33.5l-76.1 104.7c-4.2 5.7-10.7 9.3-17.8 9.8s-14-2.2-18.9-7.3l-35.9-37.2c-9.2-9.5-8.9-24.7.6-33.9s24.7-9 33.9.6l16.1 16.6 59.3-81.6zM281.8-16c13.3 0 25.3 8.3 30 20.8L328 48h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 96 0 85.3 0 72s10.7-24 24-24h96l16.2-43.2c4.7-12.5 16.6-20.8 30-20.8z"})
);

export default LanTrashCheckRegular;
