import React from 'react';

export const LanCalendarAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56H64C28.7 64 0 92.7 0 128v288c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-48V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56H128zm-16 72v24c0 4.4 3.6 8 8 8s8-3.6 8-8V80h192v24c0 4.4 3.6 8 8 8s8-3.6 8-8V80h48c26.5 0 48 21.5 48 48v48H16v-48c0-26.5 21.5-48 48-48zm192 112h128v80H304zm-16 0v80H160v-80zm-144 0v80H16v-80zM16 288h128v80H16zm0 96h128v80H64c-26.5 0-48-21.5-48-48zm144 80v-80h128v80zm144 0v-80h128v32c0 26.5-21.5 48-48 48zm128-96H304v-80h128zm-144 0H160v-80h128z"})
);

export default LanCalendarAltThin;
