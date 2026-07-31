import React from 'react';

export const LanPencilAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6l294-294c13.4-13.5 21-31.9 21-51.1s-7.6-37.6-21.2-51.1l-35.7-35.7C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2l-294 294zM404 48c6.4 0 12.6 2.6 17.2 7.1l35.7 35.7c4.6 4.6 7.1 10.7 7.1 17.2s-2.6 12.6-7.1 17.2L404 178.1 333.9 108l52.9-52.9c4.6-4.6 10.7-7.1 17.2-7.1M109.9 332 300 141.9l70.1 70.1L180 402.1zm-28.6 39.3 59.4 59.4-82.2 22.8z"})
);

export default LanPencilAltRegular;
