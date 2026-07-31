import React from 'react';

export const LanFileMedicalThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M197.5 16q5.4 0 10.5 1.2V120c0 30.9 25.1 56 56 56h102.8q1.2 5.1 1.2 10.5V448c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48zm156.4 136.6c2.3 2.3 4.3 4.8 6.1 7.4h-96c-22.1 0-40-17.9-40-40V24c2.7 1.8 5.1 3.8 7.4 6.1zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V186.5c0-17-6.7-33.3-18.7-45.3L242.7 18.7C230.7 6.7 214.5 0 197.5 0zm104 264c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v40c0 4.4 3.6 8 8 8h40c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-40c-4.4 0-8 3.6-8 8v40c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8v-40c0-4.4-3.6-8-8-8h-40c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h40c2.1 0 4.2-.8 5.7-2.3s2.3-3.5 2.3-5.7zm8-24c-13.3 0-24 10.7-24 24v32h-32c-13.3 0-24 10.7-24 24v32c0 13.3 10.7 24 24 24h32v32c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-32h32c13.3 0 24-10.7 24-24v-32c0-13.3-10.7-24-24-24h-32v-32c0-13.3-10.7-24-24-24z"})
);

export default LanFileMedicalThin;
