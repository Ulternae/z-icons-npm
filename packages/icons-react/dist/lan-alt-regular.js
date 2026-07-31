import React from 'react';

export const LanAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M467.9 120.4c4.6-5.3 11.2-8.4 18.2-8.4H616c13.3 0 24-10.7 24-24s-10.7-24-24-24H486.1c-21 0-41 9.2-54.7 25.1L172.1 391.6c-4.6 5.3-11.2 8.4-18.2 8.4H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h129.9c21 0 41-9.2 54.7-25.1zM440 400c-13.3 0-24 10.7-24 24s10.7 24 24 24h176c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanAltRegular;
