import React from 'react';

export const LanPencilSlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L373.9 308l148.9-148.9c13.6-13.5 21.2-31.9 21.2-51.1s-7.6-37.6-21.2-51.1l-35.7-35.7C473.6 7.6 455.2 0 436 0s-37.6 7.6-51.1 21.2L236 170.1zM269.9 204l62.1-62.1 70.1 70.1-62.1 62.1zm36.2 171.8-33.9-33.9-60.1 60.1-70.1-70.1 60.1-60.1-33.9-33.9L91 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L32.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6l77.2-77.2zM418.8 55.1c4.6-4.6 10.7-7.1 17.2-7.1s12.6 2.6 17.2 7.1l35.7 35.7c4.6 4.6 7.1 10.7 7.1 17.2s-2.6 12.6-7.1 17.2L436 178.1 365.9 108zM90.5 453.5l22.8-82.2 59.4 59.4z"})
);

export default LanPencilSlashRegular;
