import React from 'react';

export const LanTrumpetSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M628.7 64.7C635.4 66.8 640 73 640 80v288c0 7-4.6 13.2-11.3 15.3s-14-.5-18-6.2c-15.7-22.5-35-42.9-55.4-61.1-34.8-30.9-80.7-59.6-130.4-60h-25v126c27.6-7.1 48-32.2 48-62v-12.7c20.7 5.5 42 17.5 62.3 33.5-9.9 60.8-62.7 107.2-126.3 107.2h-192c-70.7 0-128-57.3-128-128 0-23.3 6.2-45.2 17.1-64H46.5c-3.3 9.3-12.2 16-22.6 16-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24 10.4 0 19.3 6.7 22.6 16h129.4v-40c0-13.3 10.7-24 24-24s24 10.7 24 24v40h40v-40c0-13.3 10.7-24 24-24s24 10.7 24 24v40h40v-40c0-13.3 10.7-24 24-24s24 10.7 24 24v40h24c50.1 0 96.4-28.8 131.4-60 20.4-18.2 39.7-38.6 55.4-61.1 4-5.8 11.2-8.3 17.9-6.2zM176 258c-27.6 7.1-48 32.2-48 62s20.4 54.9 48 62zm48 126h40V256h-40zm88 0h40V256h-40z"})
);

export default LanTrumpetSolid;
