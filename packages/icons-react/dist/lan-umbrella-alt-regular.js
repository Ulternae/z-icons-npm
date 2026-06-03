import React from 'react';

export const LanUmbrellaAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M280.2-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v9.1C112.7 12.2 17 105.6 2.2 224.1 0 241.6 14.6 256 32.2 256h448c17.7 0 32.2-14.4 30-31.9-14.7-118.5-110.5-211.8-230-223zm178.5 216H53.8C75.5 116.3 157.9 48 256.2 48S437 116.3 458.7 208m-178.5 96h-48v132.9c0 15-12.2 27.1-27.1 27.1-11.7 0-22.1-7.5-25.7-18.6l-4.3-13c-4.2-12.6-17.8-19.4-30.4-15.2s-19.4 17.8-15.2 30.4l4.3 13c10.2 30.7 38.9 51.4 71.3 51.4 41.5 0 75.1-33.6 75.1-75.1z"})
);

export default LanUmbrellaAltRegular;
