import React from 'react';

export const LanUsersMedicalSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M320 224a104 104 0 1 0 0-208 104 104 0 1 0 0 208m-224 8a72 72 0 1 0 0-144 72 72 0 1 0 0 144M0 416v32c0 17.7 14.3 32 32 32h86.7c-4.3-9.8-6.7-20.6-6.7-32v-16c0-53.2 20-101.8 52.9-138.6-11.7-3.5-24.1-5.4-36.9-5.4C57.3 288 0 345.3 0 416m616-256c0-39.8-32.2-72-72-72s-72 32.2-72 72c0 18.5 7 35.3 18.4 48.1 1.9-.1 3.7-.1 5.6-.1 28.2 0 54.9 6.1 79.1 17 24.2-11.6 40.9-36.3 40.9-65M304 400c0-47.8 17.5-91.5 46.4-125.1-9.8-1.9-20-2.9-30.4-2.9-88.4 0-160 71.6-160 160v16c0 17.7 14.3 32 32 32h129.4c-11.2-24.4-17.4-51.4-17.4-80m192 144a144 144 0 1 0 0-288 144 144 0 1 0 0 288m-10.7-224h21.3c8.8 0 16 7.2 16 16v37.3h37.3c8.8 0 16 7.2 16 16v21.3c0 8.8-7.2 16-16 16h-37.3v37.3c0 8.8-7.2 16-16 16h-21.3c-8.8 0-16-7.2-16-16v-37.3H432c-8.8 0-16-7.2-16-16v-21.3c0-8.8 7.2-16 16-16h37.3V336c0-8.8 7.2-16 16-16"})
);

export default LanUsersMedicalSolid;
