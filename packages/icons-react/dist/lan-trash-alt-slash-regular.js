import React from 'react';

export const LanTrashAltSlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-89-89V144h-48v222.2l-64-64V216c0-13.3-10.7-24-24-24s-24 10.7-24 24l.1 38.2L161.8 96H488c13.3 0 24-10.7 24-24s-10.7-24-24-24h-96L375.8 4.8c-4.7-12.5-16.6-20.8-30-20.8H230.2c-13.3 0-25.3 8.3-30 20.8L184 48h-70.2zM208 392c0 13.3 10.7 24 24 24s24-10.7 24-24v-66.2l-48-48zm-64-178.2-48-48V448c0 35.3 28.7 64 64 64h256c7.8 0 15.3-1.4 22.2-4l-44-44H160c-8.8 0-16-7.2-16-16z"})
);

export default LanTrashAltSlashRegular;
