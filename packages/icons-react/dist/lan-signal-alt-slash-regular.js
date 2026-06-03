import React from 'react';

export const LanSignalAltSlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v334.2l-80-80V152c0-13.3-10.7-24-24-24s-24 10.7-24 24v110.2l-287-287zM328 456c0 13.3 10.7 24 24 24s24-10.7 24-24v-10.2l-48-48zm-80-138.2-46.4-46.4c-1 2.7-1.6 5.6-1.6 8.6v176c0 13.3 10.7 24 24 24s24-10.7 24-24zM120 408c0-13.3-10.7-24-24-24s-24 10.7-24 24v48c0 13.3 10.7 24 24 24s24-10.7 24-24z"})
);

export default LanSignalAltSlashRegular;
