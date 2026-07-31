import React from 'react';

export const LanScannerTouchscreenThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M152 0c-4.4 0-8 3.6-8 8v40h16V8c0-4.4-3.6-8-8-8m168 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v50.8c5.6 2.7 11 5.8 16 9.3zm-64 0c0-4.4-3.6-8-8-8s-8 3.6-8 8v40h16zm-48 0c0-4.4-3.6-8-8-8s-8 3.6-8 8v40h16zm184-8c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8m40 8v240c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8s-8 3.6-8 8m72-8c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8M304 160v288c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V160c0-26.5 21.5-48 48-48h192c26.5 0 48 21.5 48 48M64 96c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64zm176 88v240c0 4.4-3.6 8-8 8H88c-4.4 0-8-3.6-8-8V184c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8M88 160c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h144c13.3 0 24-10.7 24-24V184c0-13.3-10.7-24-24-24z"})
);

export default LanScannerTouchscreenThin;
