import React from 'react';

export const LanTransducerSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 384 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 544H48c-26.5 0-48-21.5-48-48v-48c0-26.5 21.5-48 48-48h32zm176 0H128V400h128zm80-144c26.5 0 48 21.5 48 48v48c0 26.5-21.5 48-48 48h-32V400zM248-32c13.3 0 24 10.7 24 24v72c26.5 0 48 21.5 48 48v240H64V112c0-26.5 21.5-48 48-48V-8c0-13.3 10.7-24 24-24s24 10.7 24 24v72h64V-8c0-13.3 10.7-24 24-24"})
);

export default LanTransducerSolid;
