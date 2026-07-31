import React from 'react';

export const LanSheetPlasticRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 464h112v-88c0-39.8 32.2-72 72-72h88V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16m160-19.9 92.1-92.1H248c-13.3 0-24 10.7-24 24zM64 512c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v261.5c0 17-6.7 33.3-18.7 45.3L242.7 493.3c-12 12-28.3 18.7-45.3 18.7zm97-383-32 32c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l32-32c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9m96 32-96 96c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l96-96c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9"})
);

export default LanSheetPlasticRegular;
