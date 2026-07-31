import React from 'react';

export const LanBalanceScaleRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M520 48H393.3C381 19.7 352.8 0 320 0s-61 19.7-73.3 48H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h121.6c5.8 28.6 26.9 51.7 54.4 60.3V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24H344V156.3c27.5-8.6 48.6-31.7 54.4-60.3H520c13.3 0 24-10.7 24-24s-10.7-24-24-24m-8 147.8L584.4 320H439.6zM386 337.1C396.8 382 449.1 416 512 416s115.2-34 126-78.9c2.6-11-1-22.3-6.7-32.1l-95.2-163.2c-5-8.6-14.2-13.8-24.1-13.8s-19.1 5.3-24.1 13.8l-95.2 163.3c-5.7 9.8-9.3 21.1-6.7 32.1zM54.4 320l72.4-124.2L199.2 320H54.3zm72.4 96c62.9 0 115.2-34 126-78.9 2.6-11-1-22.3-6.7-32.1l-95.2-163.2c-5-8.6-14.2-13.8-24.1-13.8s-19.1 5.3-24.1 13.8L7.6 305.1c-5.7 9.7-9.4 21-6.7 32C11.7 382 64 416 126.8 416M320 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
);

export default LanBalanceScaleRegular;
