import React from 'react';

export const LanMeterBoltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 512c22.8 0 45-3 66.1-8.6l11.8-39.4c-34.4-1.4-61.9-29.8-61.9-64.5 0-18.4 7.8-35.9 21.5-48.1L466.7 225c12.2-10.9 28-17 44.4-17 10.8 0 20.8 2.5 29.6 6.9C521 93 415.4 0 288 0 146.6 0 32 114.6 32 256s114.6 256 256 256m120-360v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48c0-13.3 10.7-24 24-24s24 10.7 24 24m-120-24c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48c0-13.3 10.7-24 24-24m-72 24v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48c0-13.3 10.7-24 24-24s24 10.7 24 24m152.6 264h61.8l-31.2 104.1C395.6 532 404.5 544 417 544c4.6 0 9-1.7 12.4-4.7l141.1-126.4c3.5-3.1 5.5-7.6 5.5-12.4 0-9.2-7.4-16.6-16.6-16.6h-61.8l31.2-104.1c3.6-11.9-5.3-23.9-17.8-23.9-4.6 0-9 1.7-12.4 4.7L357.5 387.1c-3.5 3.1-5.5 7.6-5.5 12.4 0 9.2 7.4 16.6 16.6 16.6z"})
);

export default LanMeterBoltSolid;
