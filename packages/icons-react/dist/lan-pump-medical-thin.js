import React from 'react';

export const LanPumpMedicalThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M112 16c-8.8 0-16 7.2-16 16v96h128V32c0-8.8-7.2-16-16-16zM80 128V32c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v24h72c4.4 0 8 3.6 8 8s-3.6 8-8 8h-72v56h16c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64zm144 16H64c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V192c0-26.5-21.5-48-48-48zm-88 104v40c0 2.1-.8 4.2-2.3 5.7s-3.5 2.3-5.7 2.3H88c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h40c4.4 0 8 3.6 8 8v40c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-40c0-4.4 3.6-8 8-8h40c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8h-40c-4.4 0-8-3.6-8-8v-40c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8m8-24h32c13.3 0 24 10.7 24 24v32h32c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24h-32v32c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24v-32H88c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h32v-32c0-13.3 10.7-24 24-24"})
);

export default LanPumpMedicalThin;
