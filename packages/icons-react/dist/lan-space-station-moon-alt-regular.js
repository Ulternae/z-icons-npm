import React from 'react';

export const LanSpaceStationMoonAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 256c0-114.9 93.1-208 208-208 46.2 0 88.8 15 123.3 40.5-11 2.2-19.3 11.9-19.3 23.5 0 13.3 10.7 24 24 24h53.9c9.2 0 17.6-5.3 21.6-13.6s2.9-18.1-2.8-25.4C409.9 38 337.4 0 256 0 114.6 0 0 114.6 0 256s114.6 256 256 256c68.4 0 130.6-26.9 176.6-70.6 9.6-9.1 10-24.3.8-33.9s-24.3-10-33.9-.8c-37.3 35.6-87.8 57.4-143.4 57.4-80.8 0-150.8-46.1-185.3-113.3 39.2 12.1 98.2 25.3 185.3 25.3 97.8 0 160-16.6 199.7-30 9.8-3.3 16.3-12.4 16.3-22.7v-35.3c0-13.3-10.7-24-24-24s-24 10.7-24 24v17.7c-36 10.8-89.2 22.3-168 22.3-108.4 0-168.3-21.5-203.2-34.1l-1.5-.5C49.1 281.2 48 268.8 48 256m112-80a48 48 0 1 1 96 0 48 48 0 1 1-96 0m144 0a96 96 0 1 0-192 0 96 96 0 1 0 192 0m104 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanSpaceStationMoonAltRegular;
