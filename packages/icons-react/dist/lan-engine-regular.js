import React from 'react';

export const LanEngineRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M400 56c0 13.3-10.7 24-24 24h-64v48h96c39.8 0 72 32.2 72 72v176c0 39.8-32.2 72-72 72H264c-22.7 0-44-10.7-57.6-28.8L180 384h-12c-39.8 0-72-32.2-72-72v-32H48v80c0 13.3-10.7 24-24 24S0 373.3 0 360V152c0-13.3 10.7-24 24-24s24 10.7 24 24v80h48v-32c0-39.8 32.2-72 72-72h96V80h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h176c13.3 0 24 10.7 24 24m152 104c13.3 0 24 10.7 24 24v208c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24m-384 16c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24h24c7.6 0 14.7 3.6 19.2 9.6l33.6 44.8c4.5 6 11.6 9.6 19.2 9.6h144c13.3 0 24-10.7 24-24V200c0-13.3-10.7-24-24-24zm176 96H232c-13.3 0-24-10.7-24-24s10.7-24 24-24h112c13.3 0 24 10.7 24 24s-10.7 24-24 24"})
);

export default LanEngineRegular;
