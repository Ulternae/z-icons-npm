import React from 'react';

export const LanPencilLineRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M36.4 353.8c4.1-14.6 11.8-27.9 22.6-38.7l294-294C366.4 7.6 384.8 0 404 0s37.6 7.6 51.1 21.2l35.7 35.7C504.4 70.4 512 88.8 512 108s-7.6 37.6-21.2 51.1l-294 294c-10.7 10.7-24.1 18.5-38.7 22.6L30.4 511.1c-8.3 2.3-17.3 0-23.4-6.2s-8.5-15.1-6.2-23.4zM386.8 55.1 333.9 108l70.1 70.1 52.9-52.9c4.6-4.6 7.1-10.7 7.1-17.2s-2.6-12.6-7.1-17.2l-35.7-35.7c-4.6-4.5-10.8-7.1-17.2-7.1s-12.6 2.6-17.2 7.1M300 141.9 109.9 332l70.1 70.1L370.1 212zM58.5 453.5l82.2-22.8-59.4-59.4zM280 464h272c13.3 0 24 10.7 24 24s-10.7 24-24 24H280c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
);

export default LanPencilLineRegular;
