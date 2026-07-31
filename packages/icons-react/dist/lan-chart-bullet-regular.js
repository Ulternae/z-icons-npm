import React from 'react';

export const LanChartBulletRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M264 32c13.3 0 24 10.7 24 24v8h176c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H288v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h192v-8c0-13.3 10.7-24 24-24m-104 80v64h80v-64zm128 0v64h176v-64zm-176 0H48v64h64zm248 144c13.3 0 24 10.7 24 24v8h80c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-80v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h288v-8c0-13.3 10.7-24 24-24m-136 80v64h112v-64zm160 0v64h80v-64zm-208 0H48v64h128z"})
);

export default LanChartBulletRegular;
