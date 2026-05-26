import React from 'react';

export const LanObjectsAlignLeftRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 24C0 10.7 10.7 0 24 0s24 10.7 24 24v464c0 13.3-10.7 24-24 24S0 501.3 0 488zm176 152h288v-64H176zm-48-64c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48zm48 288h160v-64H176zm-48-64c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48z"})
);

export default LanObjectsAlignLeftRegular;
