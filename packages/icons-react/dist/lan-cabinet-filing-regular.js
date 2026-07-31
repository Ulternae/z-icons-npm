import React from 'react';

export const LanCabinetFilingRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 232H64V64c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16zM16 256v192c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80C44.7 0 16 28.7 16 64zm368 192c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V280h320zM160 152v-8h128v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-16c0-22.1-17.9-40-40-40H152c-22.1 0-40 17.9-40 40v16c0 13.3 10.7 24 24 24s24-10.7 24-24m-8 184c-22.1 0-40 17.9-40 40v16c0 13.3 10.7 24 24 24s24-10.7 24-24v-8h128v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-16c0-22.1-17.9-40-40-40z"})
);

export default LanCabinetFilingRegular;
