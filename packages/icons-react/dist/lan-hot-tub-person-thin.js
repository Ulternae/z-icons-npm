import React from 'react';

export const LanHotTubPersonThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 40c0 18.1 7.7 35.4 21.1 47.5l26.5 23.8c20.6 18.5 32.4 45 32.4 72.7 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-23.2-9.8-45.3-27.1-60.8l-26.5-23.8C217.6 84.3 208 62.7 208 40c0-4.4 3.6-8 8-8s8 3.6 8 8M16 272h209.8l-82.9-51.8c-12.7-7.9-27.4-12.2-42.4-12.2H64c-26.5 0-48 21.5-48 48zm0 16v160c0 26.5 21.5 48 48 48h32V288zm200 208V288H112v208zm16 0h104V288H232zm120 0h32c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48h-32zm-24-224h56c35.3 0 64 28.7 64 64v112c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64h36.5c18 0 35.6 5.1 50.9 14.6l89.1 55.7c10.2 6.4 21.9 9.7 33.9 9.7zm0-240c4.4 0 8 3.6 8 8 0 18.1 7.7 35.4 21.1 47.5l26.5 23.8c20.6 18.5 32.4 45 32.4 72.7 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-23.2-9.8-45.3-27.1-60.8l-26.5-23.8C329.6 84.3 320 62.7 320 40c0-4.4 3.6-8 8-8M112 96a48 48 0 1 0-96 0 48 48 0 1 0 96 0M0 96a64 64 0 1 1 128 0A64 64 0 1 1 0 96"})
);

export default LanHotTubPersonThin;
