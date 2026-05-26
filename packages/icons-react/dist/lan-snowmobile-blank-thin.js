import React from 'react';

export const LanSnowmobileBlankThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M303 68.1c-2.1-3.9-7-5.3-10.9-3.1s-5.3 7-3.1 10.9l37.4 67.3-66.2 80.9H72c-22.1 0-40 17.9-40 40v72c-19.4 14.6-32 37.8-32 64 0 44.2 35.8 80 80 80h160c44.2 0 80-35.8 80-80 0-18-6-34.6-16-48h59l56 112h-59.1c-4.4 0-8 3.6-8 8s3.6 8 8 8h112c22.1 0 40-17.9 40-40v-16c0-4.4-3.6-8-8-8s-8 3.6-8 8v16c0 13.3-10.7 24-24 24h-35.1l-56-112h35.1c53 0 96-43 96-96v-16c0-2.9-1.5-5.5-4-6.9l-166.1-94.9-38.9-70zM288 336c-13.4-10-30-16-48-16H80c-11.4 0-22.2 2.4-32 6.7V264c0-13.3 10.7-24 24-24h192c2.4 0 4.7-1.1 6.2-2.9l67.7-82.8L496 244.6V256c0 44.2-35.8 80-80 80zm-208 0h160c35.3 0 64 28.7 64 64s-28.7 64-64 64H80c-35.3 0-64-28.7-64-64s28.7-64 64-64"})
);

export default LanSnowmobileBlankThin;
