import React from 'react';

export const LanDresserRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M336 0c26.5 0 48 21.5 48 48v440c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H48v8c0 13.3-10.7 24-24 24S0 501.3 0 488V48C0 21.5 21.5 0 48 0zm-96 336v8c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-8H48v96h288v-96zM48 288h288V176h-96v8c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-8H48zm0-160h288V48H48z"})
);

export default LanDresserRegular;
